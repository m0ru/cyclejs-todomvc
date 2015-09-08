//require('./jspm_packages/system');
//require('./jspm.config');
var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 8080});

let wsCount = 0;
let sockets = new Map();
wss.on('connection', function(thisWs) {
    thisWs.uid = wsCount;
    sockets[thisWs.uid] = thisWs;
    wsCount++; //TODO quick and dirty. not suited for production use

    thisWs.on('message', function(message) {
        console.log('received: %s', message);
        for(let [uid, ws] of sockets) {
            if(uid === thisWs.uid) {
                ws.send('echo: ' + message);
            } else {
                ws.send('broadcast: ' + message);
            }
        }
    });
});