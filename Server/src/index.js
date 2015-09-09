//require('./jspm_packages/system');
//require('./jspm.config');
var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 8080});

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
