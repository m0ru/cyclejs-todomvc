import WebSocket from 'ws';
import {Rx} from '@cycle/core';


//var ws = new WebSocket('ws://localhost:8080');

export function webSocketStreams(url) {
    return (send$) => {
        let ws = new WebSocket(url);
        return new Promise((resolve, reject) => {
            ws.onopen = () => {
                console.log('websocket open');
                receive$ = _fromWebsocket(ws, send$)

                //TODO for debugging, deletme
                window.ws = ws;
                window.receive$ = receive$;

                resolve(receive$);
            }
            ws.onerror = (args) => {
                console.error('websocket closed: ', args);
                reject("Couldn't open web-socket to " + url);
            }
        })
    }
}
/**
 * NOTE: can only be called once on each web-socket as
 * it attaches callback-function to predermined properties.
 */
function _fromWebsocket(ws) {
    let receive$ = Rx.Observable
        .create(observer => {
            ws.onmessage = (msg, flags) => {
                console.log('received - msg: ', msg);
                console.log('received - flags: ', flags);
                observer.onNext(msg);
            }
            ws.onerror = (args) => {
                console.error('websocket error: ', args);
                observer.onError(args);
            }
            ws.onerror = (args) => {
                console.error('websocket closed: ', args);
                observer.onClose(args);
            }
        });
    send$.subscribe(x => ws.send(x));

    return receive$;
}
