import WebSocket from 'ws';
import {Rx} from '@cycle/core';

export default function makeWsDriver(url) {
    return (send$) => {
        let ws = new WebSocket(url);

        // enable sending after the socket opens
        ws.onopen = function() {
            send$.subscribe(x => ws.send(x));
        }

        // receiving messages and errors
        let incoming$ = Rx.Observable.create(observer => {
            ws.onmessage = (msg, flags) => {
                observer.onNext(msg);
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
        incoming$.subscribe(x => console.log('incoming: ', x));
        return incoming$;
    }
}
