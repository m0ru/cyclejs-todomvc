;

function addTodo(DOM) {
    let formSubmit$ = DOM.get('#add-todo-form', 'submit')
        .map(e => e.target.querySelector('#todo-text').value);

    return formSubmit$;
}

/**
 * Alternative implementation of the intent, using `join`
 * to sample from the text-field
 */
function addTodo2(DOM) {
    let keypress$ = DOM.get('#todo-text', 'keypress');

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
    let keypress$ = DOM.get('#todo-text', 'keypress');

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

export default function intent(DOM) {
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
