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
    let keypress$ = responses.DOM.get('.new-todo', 'keypress');

    let submit$ = keypress$.filter(e => {
                //was `enter` pressed?
                let key =  e.keypress? e.keypress : e.which;
                return key === 13;
            });
    let submitText$ = submit$.map(e => {
        let ret = e.target.value;
        // clear out input field
        e.target.value = ""; //a bit ugly but simple
        return ret;
    });

    submitText$.subscribe(x => console.log('submitting ', x));

    let vtree$ = Cycle.Rx.Observable.just(
		<input className="new-todo"
            id="todo-text" name="todotext"
            placeholder="What needs to be done?"
            autofocus=""></input>
    );

    return {
      DOM: vtree$,
        events: {
          submit: submitText$
        }
    };
}
