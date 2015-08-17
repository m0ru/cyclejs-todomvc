/** @jsx hJSX */
import Cycle from '@cycle/core';
//import CycleDOM from '@cycle/dom';
import CycleDOM from '@cycle/dom';
import Immutable from 'immutable';
import todoItem from './todo-item';
let {makeDOMDriver, hJSX} = CycleDOM;

console.log('app.js loaded.');

function todos2Lis(todos) {
    return todos.toArray().map(todo =>
        <li>
            <todo-item value={ todo.text } id={ todo.id }/>
        </li>
    );
}

function view(state$) {
    return state$.map( ({todos}) =>
        <div>
            <form action="" id="add-todo-form">
                <input type="text" id="todo-text" name="todotext"></input>
                <button id="todo-button" class="action-button">Add</button>
            </form>

            <ul id="todo-list">
                { todos2Lis(todos) }
            </ul>
        </div>
    );
}


function addTodo(DOM) {
    let formSubmit$ = DOM.get('#add-todo-form', 'submit')
        .map(e => {
            //supress page-reload on form submission
            e.preventDefault();
            return e.target
                .querySelector('#todo-text').value
        });
    // make sure `preventDefault` gets called even if
    // the intent isn't used elsewhere
    formSubmit$.subscribe(x => void(0));

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
  let rm$ = DOM.get('.cycleCustomElement-TODO-ITEM', 'delete');
  rm$.subscribe(a => console.log('rm ', a.target.id)); // TODO testing; deletme
  return rm$.map(e => e.target.id);
}

function intent(DOM) {
    window.DOM = DOM;
    return {
        addTodo: addTodo(DOM),
        addTodo2: addTodo2(DOM),
        addTodo3: addTodo3(DOM),
        removeTodo: removeTodo(DOM)
    }

}

function model(actions) {
    window.actions = actions; // for debugging

    var todos$ = actions.addTodo3
        .map(text => ({
            id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
            text
        }))
        .startWith(Immutable.Map())
        .scan((items, item) => items.set(item.id, item));

    todos$.subscribe(a => console.log('actions.addTodo: ', a));

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
