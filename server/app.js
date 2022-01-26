const WebSocket = require('ws');


const wss = new WebSocket.WebSocketServer(
    { 
        port: 10101,
        skipUTF8Validation: true
    }
    );

console.log("Starting websocket server at port 6667")



wss.on('connection', function connection(ws) {
  const rand = Math.random() * 100000000
  ws.id = rand
  ws.on('message', function message(data) {
    console.log('received: %s (%i)\n', data, rand);
  });

  console.log("connection gained lmao")
  ws.send('someone connected\n');
});
