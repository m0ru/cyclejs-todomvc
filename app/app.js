
import Cycle from '@cycle/core';
//import CycleDOM from '@cycle/dom';
import CycleDOM from '@cycle/dom';
let {h} = CycleDOM;

console.log('app_cycle.js loaded.');

function todos2Lis(todos) {
    return todos.map(todo => h('li', todo) )
}

function view(state$) {
    return state$.map(({name, todos}) =>
        h('div', [
            h('form#add-todo-form', [
                h('input#todo-text', {
                    attributes: {
                        type: 'text',
                        name: 'todotext'
                    }
                }),
                h('button#todo-button.action-button', 'Add')
            ]),
            h('ul#todo-list', todos2Lis(todos)),
            h('br'),
//            h('button#todo-button.action-button', 'Add'),
            h('label', 'Name:'),
            h('input.myinput', {
                attributes: {type: 'text'}
            }),
            h('p', 'Hello ' + name)
        ])
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
            .merge(DOM.get('#todo-button', 'click'))

    return text$.join(submit$,
        () => text$, //window = as long as text$ is open
        () => Cycle.Rx.Observable.timer(0),
        (t, s) => 'join:' + t
    )

}

function intent(DOM) {
    window.DOM = DOM;
    return {
        changeName: DOM.get('.myinput', 'input').map(ev => ev.target.value),
        addTodo: addTodo(DOM)
    }

}

function model(actions) {
    //TODO combineLatest if more observables are part of the state
    window.actions = actions;
    //actions.addTodo.subscribe(a => console.log(a));

    var todos$ = actions.addTodo
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
