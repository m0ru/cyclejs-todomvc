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
    //wsOutgoing$ = Cycle.Rx.Observable.never();

    // now includes the actions received from the server
    //let allActionsMerged$ = mergedLocalActions$.merge(wsIncoming$);
    //let allActionsMerged$ = mergedLocalActions$;

    // return to the more convenient format of having separate action-streams
    //let actions = splitActions(Object.keys(localActions), allActionsMerged$);
    const actions = localActions;



    //TODO debug; deletme
    window.actions = actions;
    window.DOM = drivers.DOM;
    window.ws = drivers.ws;
    window.wsIncoming$ = wsIncoming$;
    window.wsOutgoing$ = wsOutgoing$;

/*
    mergedLocalActions$.subscribe(x => console.log('mergedLocalActions$: ', x));
    wsIncoming$.subscribe(x => console.log('wsIncoming$: ', x));
    //TODO subscribing twice causes the websocket onNext to only trigger
    // for the second observable.
    //
    allActionsMerged$ = mergedLocalActions$.merge(wsIncoming$);
    allActionsMerged$.subscribe(x => console.log('allActionsMerged$1: ', x));
    allActionsMerged$.subscribe(x => console.log('allActionsMerged$2: ', x));
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
    const key$ = Cycle.Rx.Observable
        .fromArray(Object.keys(actions))
        /*
        * allow for multiple subscriptions by turning the above into a
        * hot observable
        */
        .publish();

    const merged$ = key$
        .flatMap(type => {
            console.log('flatMap type ', type);
            return actions[type]
              .map(data => {
                  return {type, data};
              })
          }
        )

    key$.subscribe(t => console.log('type ', t));

    merged$.subscribe(e => console.log('merged$', e));
    key$.connect();
    return merged$;
}
function mergeActions2(actions) {
    return Cycle.Rx.Observable
        .fromArray(Object.keys(actions))
        .flatMap(type => actions[type]
            .map(data => {
                return {type, data};
            })
        )
        /*
        * allow for multiple subscriptions by turning the above into a
        * hot observable
        */
        .publish()
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
