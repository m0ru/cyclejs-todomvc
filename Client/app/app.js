/** @jsx hJSX */
import Cycle from '@cycle/core';
import {makeDOMDriver} from '@cycle/dom';
import todoItem from './todo-item';
import submitField from './submit-field';

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
            'todo-item': todoItem,
            'submit-field': submitField
    }),
    ws: makeWsDriver('ws://localhost:8080')
}

function cyclejsMain(drivers) {
    let wsIncoming$ = drivers.ws;


    window.DOM = drivers.DOM;
    window.ws = drivers.ws;
    let wsOutgoing$ = Cycle.Rx.Observable.create(observer => {
        window.wsSend = observer.onNext.bind(observer);
    });
    window.wsIncoming$ = wsIncoming$;
    window.wsOutgoing$ = wsOutgoing$;
    wsIncoming$.subscribe(x => console.log('wsIncoming$: ', x.data));


    let actions = intent(drivers.DOM);
    mergedActions$ = mergeActions(actions);

    wsOutgoing$ = mergedActions$;



    mergedActions$.subscribe(args => console.log('actions: ', args));
    splitActions = splitActions(Object.keys(actions), mergedActions$);

    splitActions.addTodo.subscribe(args => console.log('split add ', args));
    splitActions.removeTodo.subscribe(args => console.log('split rm ', args));

    window.actions = actions;
    window.mergedActions$ = mergedActions$;

    let state$ = model(actions);
    return {
        DOM: view(state$),
        ws: wsOutgoing$
    };
}

Cycle.run(cyclejsMain, cycleDrivers);

/*
* In: { A: A$, B: B$}
*
* Out: actions$:
*    |-----{type: 'A', data: {...}} ----
*       ------ {type: 'B', data: {...}} ---->
*/
function mergeActions(actions) {
    return Cycle.Rx.Observable
        .fromArray(Object.keys(actions))
        .flatMap(type => actions[type]
            .map(data => {
                return {type, data};
            })
        );
}

/*
* In: actions$:
*    |-----{type: 'A', data: {...}} ----
*       ------ {type: 'B', data: {...}} ---->
*
* Out: { A: A$, B: B$}
*/
function splitActions(types, actions$) {
    let actions = {};
    for (let t of types) {
        actions[t] = actions$
            .filter(a => a.type === t)
            .map(a => a.data)
    }
    return actions;
}
