const WebSocket = require('ws');


const wss = new WebSocket.WebSocketServer(
    { 
        port: 10101,
        skipUTF8Validation: true
    }
    );

const exchangeName = 'amq.fanout'

var open = require('amqplib').connect('amqp://localhost');

var channel = null

console.log("Starting websocket server at port 6667")

open.then(function(conn){
    return conn.createChannel();
}).then(function(ch) {
    channel = ch
})

wss.on('connection', function connection(ws) {
  const rand = Math.random() * 100000000
  ws.id = rand
  ws.on('message', function message(data) {
    console.log('received: %s (%i)\n', data, ws.id);
    channel.publish(exchangeName, '', data)
  });

  console.log("setting up queue")
  if(channel !== null) {
    console.log("assert queue")
    const queueName = `chat-client-${ws.id}`
    channel.assertQueue(queueName, {
        autoDelete: true,
        durable: false
    }).then((ok) => {
        console.log("bind queue")
        channel.bindQueue(queueName, exchangeName, '')
    }).then((ok) => {
        channel.consume(queueName, (message) => {
            console.log("send to ws:")
            console.log(message.content)
            console.log(JSON.parse(message.content))
            ws.send(JSON.stringify(JSON.parse(message.content)))
        })
    })
  }
  console.log("connection gained lmao")
});
