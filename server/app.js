const WebSocket = require('ws');


const wss = new WebSocket.WebSocketServer(
    { 
        port: 10101,
        skipUTF8Validation: true
    }
    );

console.log("Starting websocket server at port 6667")

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s\n', data);
  });
  console.log("connection gained lmao")
  ws.send('someone connected\n');
});
