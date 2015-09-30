
//import System from 'systemjs';
//import System from './jspm_packages/system';
//let System = require('./jspm_packages/system');
//var System = require('es6-module-loader').System;
//import { System } from 'es6-module-loader';
//import './jspm.config.js';
import express from 'express';
import attachExpressWs from 'express-ws'

/*
import { mergeActions, splitActions } from '../app/utils';
import Cycle from '@cycle/core';
import {makeDOMDriver} from '@cycle/dom';
import todoItem from './todo-item';
import submitField from './submit-field';
import model from './model';
import makeWsDriver from './make-ws-driver';
*/

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

    console.log('Listening at http://%s:%s', host, port);
});


let wsCount = 0;
const sockets = new Map();
function handleWsConnection(thisWs) {
    thisWs.uid = wsCount;
    sockets.set(thisWs.uid, thisWs);
    wsCount++; //TODO quick and dirty. not suited for production use
    thisWs.send('hello! you have opened a websocket-connection to this server.');

    thisWs.on('close', (function(){
        console.log('closing socket ', this.uid);
        sockets.delete(this.uid);
    }).bind(thisWs));


    thisWs.on('message', (message) => {
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
