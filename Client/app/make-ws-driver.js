import WebSocket from 'ws';
import {Rx} from '@cycle/core';

export default function makeWsDriver(url) {
    return (send$) => {
        let ws = new WebSocket(url);

        // enable sending after the socket opens
        ws.onopen = function() {
            send$.subscribe(x =>
                ws.send(JSON.stringify(x))
            );
        }

        // receiving messages and errors
        return Rx.Observable.create(observer => {
            ws.addEventListener('message', (msg, flags) => {
                window.wsObserver = observer; //TODO debug; deletme
                const msgData = JSON.parse(new String(msg.data));
                console.log('websocket onmessage: ', msgData)
                observer.onNext(msgData);
            });
            ws.addEventListener('error',  (args) => {
                console.error('websocket error: ', args);
                //TODO try reconnecting first
                observer.onError(args);
            });
            ws.addEventListener('close',  (args) => {
                console.log('websocket closed: ', args);
                observer.onCompleted(); //TODO not a function
            });
        });
    }
}
