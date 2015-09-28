/** @jsx hJSX */
import Cycle from '@cycle/core';
import CycleDOM from '@cycle/dom';
let {makeDOMDriver, hJSX} = CycleDOM;

export default function submitField(responses) {
    let keypress$ = responses.DOM.get('.new-todo', 'keyup');
    let text$ = responses.DOM
            .get('.new-todo', 'change')
            .map(e => e.target.value);
    let submit$ = keypress$.filter(e => {
                //was `enter` pressed?
                let key =  e.keypress? e.keypress : e.which;
                return key === 13;
            });

    let submitText$ = submit$.withLatestFrom(text$, (s, t) => t);

    let vtree$ = submit$
        .map(x => '')
        .startWith('')
        .merge(text$)
        .map(t =>
    		<input className="new-todo"
                id="todo-text" name="todotext"
                placeholder="What needs to be done?"
                value={ t }
                autofocus=""></input>
        )

    // to prevent the fields 'submit' intruding on our custom submit publishing
    //responses.DOM.get('.new-todo', 'submit').subscribe(e => e.preventDefault());

    return {
      DOM: vtree$,
        events: {
          submittodo: submitText$
        }
    };
}
