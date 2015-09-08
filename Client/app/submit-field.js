/** @jsx hJSX */
import Cycle from '@cycle/core';
import CycleDOM from '@cycle/dom';
let {makeDOMDriver, hJSX} = CycleDOM;

export default function submitField(responses) {
  // Use responses.DOM to get DOM events
  // happening on the elements from this
  // custom element.
  //
  // Use responses.props to get properties
  // passed to this custom elements from
  // the parent Cycle.js app.
  // ...
   //let text$ = responses.props.get('value');
   //let id$ = responses.props.get('todo-id');
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

    return {
      DOM: vtree$,
        events: {
          submit: submitText$
        }
    };
}
