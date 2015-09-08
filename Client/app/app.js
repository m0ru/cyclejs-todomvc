/** @jsx hJSX */
import Cycle from '@cycle/core';
import {makeDOMDriver} from '@cycle/dom';
import todoItem from './todo-item';

import intent from './intent';
import model from './model';
import view from './view';

import makeWsDriver from './make-ws-driver';

//TODO debug; deleteme
window.Cycle = Cycle;
/* TODO STOPPED HERE:
*  get this plugin to work: https://www.npmjs.com/package/rx-dom
* and use this function: https://xgrommx.github.io/rx-book/content/rxjs_bindings/dom/web_sockets/from_web_socket.html
*/

console.log('app.js loaded.');

let cycleDrivers = {
    DOM: makeDOMDriver('#cycleMountPoint', {
            'todo-item': todoItem
    }),
    ws: makeWsDriver('ws://localhost:8080')
}

function cyclejsMain(drivers) {
    window.DOM = drivers.DOM;
    window.ws = drivers.ws;

    //window.wsReceive$ = makeWsDriver('ws://localhost:8080')(send$);
    let wsIncoming$ = drivers.ws;

    let wsOutgoing$ = Cycle.Rx.Observable.create(observer => {
        window.wsSend = observer.onNext.bind(observer);
    });
    window.wsIncoming$ = wsIncoming$;
    window.wsOutgoing$ = wsOutgoing$;
    wsIncoming$.subscribe(x => console.log('wsIncoming$: ', x.data));


    let actions = intent(drivers.DOM);
    window.actions = actions;
    let state$ = model(actions);
    return {
        DOM: view(state$),
        ws: wsOutgoing$
    };
}

Cycle.run(cyclejsMain, cycleDrivers);
