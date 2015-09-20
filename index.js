
import express from 'express';
import attachExpressWs from 'express-ws'

const app = express();
attachExpressWs(app);

app.use(express.static('.'));

app.get('/todos', (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ a: 1 }));
});
app.ws('/todos', function(ws, req) {
  handleWsConnection(ws);
});


const exprServer = app.listen(8000, () => {
    const host = exprServer.address().address;
    const port = exprServer.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
})


let wsCount = 0;
const sockets = new Map();
function handleWsConnection(thisWs) {
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
}
