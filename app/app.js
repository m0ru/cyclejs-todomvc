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
    ws: makeWsDriver('ws://localhost:8000/todos')
}

function cyclejsMain(drivers) {

    // stream from server
    const wsIncoming$ = drivers.ws;

    // get own actions
    const localActions = intent(drivers.DOM);
    const mergedLocalActions$ = mergeActions(localActions);

    // send own actions to server
    wsOutgoing$ = mergedLocalActions$;

    // now includes the actions received from the server
    const allActionsMerged$ = mergedLocalActions$.merge(wsIncoming$);

    // return to the more convenient format of having separate action-streams
    const actions = splitActions(Object.keys(localActions), allActionsMerged$);

    //TODO debug; deletme
    /*
    mergedLocalActions$.subscribe(x => console.log('mergedLocalActions$ ', x));
    wsOutgoing$.subscribe(x => console.log('wsOutgoing$ ', x));
    wsIncoming$.subscribe(x => console.log('wsIncoming$ ', x));
    allActionsMerged$.subscribe(x => console.log('allActionsMerged$ ', x));
    actions.addTodo.subscribe(x => console.log('merged and split ', x));
    window.actions = actions;
    window.DOM = drivers.DOM;
    window.ws = drivers.ws;
    window.wsIncoming$ = wsIncoming$;
    window.wsOutgoing$ = wsOutgoing$;
    */

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
    let merged$ = Cycle.Rx.Observable.empty();
    for (let actionType of Object.keys(actions)) {
        const typed$ = actions[actionType].map(data => ({type: actionType, data}));
        merged$ = merged$.merge(typed$);
    }
    return merged$;
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
