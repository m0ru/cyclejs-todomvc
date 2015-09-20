//require('./jspm_packages/system');
//require('./jspm.config');
var http = require('http');

// Create an HTTP server
var httpServer = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ a: 1 }));
});
httpServer.on('upgrade', function(req, socket, head) {
  socket.write('HTTP/1.1 101 Web Socket Protocol Handshake\r\n' +
               'Upgrade: WebSocket\r\n' +
               'Connection: Upgrade\r\n' +
               '\r\n');

  socket.pipe(socket); // echo back
});
httpServer.listen(3000);
/*

// now that server is running
srv.listen(3000, '127.0.0.1', function() {

  // make a request
  var options = {
    port: 3000,
    hostname: '127.0.0.1',
    headers: {
      'Connection': 'Upgrade',
      'Upgrade': 'websocket'
    }
  };

  var req = http.request(options);
  req.end();

  req.on('upgrade', function(res, socket, upgradeHead) {
    console.log('got upgraded!');
    socket.end();
    process.exit(0);
  });
});

*/


var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 8080});
let wsCount = 0;
let sockets = new Map();
wss.on('connection', function(thisWs) {
    thisWs.uid = wsCount;
    sockets.set(thisWs.uid, thisWs);
    wsCount++; //TODO quick and dirty. not suited for production use
    thisWs.send('hello! you have opened a websocket-connection to this server.');


    thisWs.on('message', function(message) {
        console.log('received: %s', message);
        let action = JSON.parse(message);
        for(let [uid, ws] of sockets) {
            //TODO isopen-check / deal with clients dropping
            if(uid !== thisWs.uid) {
                console.log('broadcasting to ', uid);
                action.broadcast = true;//TODO for debugging, deletme
                ws.send(JSON.stringify(action));
            }
        }
    });
});
