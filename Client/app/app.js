/** @jsx hJSX */
import Cycle from '@cycle/core';
//import CycleDOM from '@cycle/dom';
import CycleDOM from '@cycle/dom';
import Immutable from 'immutable';
import todoItem from './todo-item';
let {makeDOMDriver, hJSX} = CycleDOM;

import './wstest'

//TODO debug; deleteme
window.Cycle = Cycle;
window.CycleDOM = CycleDOM;
/* TODO STOPPED HERE:
*  get this plugin to work: https://www.npmjs.com/package/rx-dom
* and use this function: https://xgrommx.github.io/rx-book/content/rxjs_bindings/dom/web_sockets/from_web_socket.html
*/

console.log('app.js loaded.');

function todos2Lis(todos) {
    return todos.toArray().map(todo =>
        <li attributes={{'data-id': todo.id}}>
            <todo-item
                value={ todo.text }
                todo-id = { todo.id }/>
        </li>
    );
}

//s/div action/form action/
function view(state$) {
    return state$.map( ({todos}) =>
        <div>
            <div action="" id="add-todo-form">
                <input type="text" id="todo-text" name="todotext"></input>
                <button id="todo-button" class="action-button">Add</button>
            </div>

            <ul id="todo-list">
                { todos2Lis(todos) }
            </ul>
        </div>
    );
}


function addTodo(DOM) {
    let formSubmit$ = DOM.get('#add-todo-form', 'submit')
        .map(e => {
            return e.target
                .querySelector('#todo-text').value
        });

    return formSubmit$;
}

/**
 * Alternative implementation of the intent, using `join`
 * to sample from the text-field
 */
function addTodo2(DOM) {
    let keypress$ = DOM.get('#todo-text', 'change');

    let text$ = keypress$.map(e => e.target.value)
    let submit$ = keypress$.filter(e => {
                let key =  e.keypress? e.keypress : e.which;
                return key === 13;
            }) //`enter` pressed
            //add-button clicked
            .merge(DOM.get('#todo-button', 'click'));

    return text$
        .join(submit$,
            () => text$, //window = as long as text$ is open
            () => Cycle.Rx.Observable.timer(0),
            (t, s) => 'join:' + t
        );
}

/**
 * Alternative implementation of the intent, using
 * `withLatestFrom` to sample from the text-field
 */
function addTodo3(DOM) {
    let keypress$ = DOM.get('#todo-text', 'change');

    let text$ = keypress$.map(e => e.target.value)
    let submit$ = keypress$.filter(e => {
                let key =  e.keypress? e.keypress : e.which;
                return key === 13;
            }) //`enter` pressed
            //add-button clicked
            .merge(DOM.get('#todo-button', 'click'));

    return submit$
        .withLatestFrom(text$, (s, t) => t);
}

function removeTodo(DOM) {
  return DOM
    .get('.cycleCustomElement-TODO-ITEM', 'delete')
    .map(id => {
        console.log('removing ', id.detail);
        return Number.parseInt(id.detail);
    });
}

function intent(DOM) {
    window.DOM = DOM;

    // supress page reload on form-submit
    DOM.get('#add-todo-form', 'submit').subscribe(e => {
        console.log('supressing reload ', e);
        e.preventDefault();
    });

    return {
        addTodo: addTodo(DOM),
        addTodo2: addTodo2(DOM),
        addTodo3: addTodo3(DOM),
        removeTodo: removeTodo(DOM)
    }

}

function model(actions) {
    window.actions = actions; // for debugging

    let addMod$ = actions.addTodo3
        .map(text => ({
            id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
            text
        }))
        .map(todo => todos => todos.set(todo.id, todo));

    let removalMod$ = actions.removeTodo
        .map(id => todos => {
            window.someId = id;
            window.todosBefore = todos;
            let ret = todos.remove(id)
            window.todosAfter = ret;
            return ret;
        });

    let todos$ = Cycle.Rx.Observable
        .merge(addMod$, removalMod$)
        .startWith(Immutable.Map())
        .scan((todos, mod) => {
            //window.todos = todos;
            console.log('applying mod')
            let ret = mod(todos)
            //window.todosAfter = ret;
            return ret;
        });

    return Cycle.Rx.Observable.combineLatest(
        todos$,
        (todos) => ({todos})
    )
}

function cyclejsMain(drivers) {
    let actions = intent(drivers.DOM);
    let state$ = model(actions);
    return {
        DOM: view(state$)
    };
}
let cycleDrivers = {
    DOM: CycleDOM.makeDOMDriver('#helloCycleContainer', {
            'todo-item': todoItem
    })
}

Cycle.run(cyclejsMain, cycleDrivers);
