const WebSocket = require('ws');


const wss = new WebSocket.WebSocketServer({ port: 6667 });

console.log("Starting websocket server at port 6667")

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});
