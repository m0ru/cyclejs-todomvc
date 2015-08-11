/** @jsx hJSX */
import Cycle from '@cycle/core';
//import CycleDOM from '@cycle/dom';
import CycleDOM from '@cycle/dom';
let {makeDOMDriver, hJSX} = CycleDOM;

console.log('app_jsx.js loaded.');

function todos2Lis(todos) {
    return todos.map(todo =>
        <li>{ todo } <a href='#'>x</a></li>
    )
}

function view(state$) {
    return state$.map( ({name, todos}) =>
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

    return text$.join(submit$,
        () => text$, //window = as long as text$ is open
        () => Cycle.Rx.Observable.timer(0),
        (t, s) => 'join:' + t
    )
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

    return submit$.withLatestFrom(text$, (s, t) => t)
}

function intent(DOM) {
    window.DOM = DOM;
    return {
        changeName: DOM.get('.myinput', 'input').map(ev => ev.target.value),
        addTodo: addTodo(DOM),
        addTodo2: addTodo2(DOM),
        addTodo3: addTodo3(DOM)
    }

}

function model(actions) {
    window.actions = actions; // for debugging

    var todos$ = actions.addTodo3
        .startWith([])
        .scan((items, item) => items.concat(item));

    todos$.subscribe(a => console.log('actions.addTodo: ', a));

    return Cycle.Rx.Observable.combineLatest(
        actions.changeName.startWith(''),
        todos$,
        (name, todos) => ({name, todos})
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
    DOM: CycleDOM.makeDOMDriver('#helloCycleContainer')
}

Cycle.run(cyclejsMain, cycleDrivers);
