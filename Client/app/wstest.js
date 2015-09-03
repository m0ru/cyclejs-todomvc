import WebSocket from 'ws';

var ws = new WebSocket('ws://localhost:8080');
//var ws = new WebSocket('ws://echo.websocket.org');

console.log(ws);

ws.onopen = function open() {
    console.log('sending')
    ws.send('something');
};

ws.onmessage = function(data, flags) {
  // flags.binary will be set if a binary data is received.
  // flags.masked will be set if the data was masked.
  console.log('received message:', data.data);
};
