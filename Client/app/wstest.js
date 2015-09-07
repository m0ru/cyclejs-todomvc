import WebSocket from 'ws';
import {Rx} from '@cycle/core';


//var ws = new WebSocket('ws://localhost:8080');

let send$ = Rx.Observable.create(observer => {
    window.wsSend = observer.onNext.bind(observer);
});

window.wsReceive$ = makeWsDriver('ws://localhost:8080')(send$);
window.wsReceive$.subscribe(x => console.log('wsReceive$: ', x.data));

export default function makeWsDriver(url) {
    return (send$) => {
        let ws = new WebSocket(url);

        // enable sending after the socket opens
        ws.onopen = function() {
            send$.subscribe(x => ws.send(x));
        }

        // receiving messages and errors
        return Rx.Observable.create(observer => {
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
                //TODO try reconnecting first
                observer.onClose(args);
            }
        });
    }
}
