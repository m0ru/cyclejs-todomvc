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
            ws.onmessage = (msg, flags) => {
                observer.onNext(JSON.parse(msg.data));
            }
            ws.onerror = (args) => {
                console.error('websocket error: ', args);
                //TODO try reconnecting first
                observer.onError(args);
            }
            ws.onclose = (args) => {
                console.error('websocket closed: ', args);
                observer.onCompleted(); //TODO not a function
            }
        });
    }
}
