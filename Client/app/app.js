/** @jsx hJSX */
import Cycle from '@cycle/core';
import {makeDOMDriver} from '@cycle/dom';
import todoItem from './todo-item';

import intent from './intent';
import model from './model';
import view from './view';

//import makeWsDriver from './wstest';

//TODO debug; deleteme
window.Cycle = Cycle;
/* TODO STOPPED HERE:
*  get this plugin to work: https://www.npmjs.com/package/rx-dom
* and use this function: https://xgrommx.github.io/rx-book/content/rxjs_bindings/dom/web_sockets/from_web_socket.html
*/

console.log('app.js loaded.');

function cyclejsMain(drivers) {
    window.dDOM = drivers.DOM;
    let actions = intent(drivers.DOM);
    let state$ = model(actions);
    return {
        DOM: view(state$)
    };
}
let cycleDrivers = {
    DOM: makeDOMDriver('#helloCycleContainer', {
            'todo-item': todoItem
    })
}

Cycle.run(cyclejsMain, cycleDrivers);
