;
function removeTodo(DOM) {
  return DOM
    .get('.cycleCustomElement-TODO-ITEM', 'delete')
    .map(id => {
        console.log('removing ', id.detail);
        return Number.parseInt(id.detail);
    });
}

function addTodo(DOM) {
  submittodo$ = DOM.get('.cycleCustomElement-SUBMIT-FIELD.new-todo', 'submittodo');
  const foo$ = submittodo$.map(e => {
    console.log('intent.js: map submittodo via cycle ')
    return e;
  });
  foo$.subscribe(e => 0);
  foo$.subscribe(e => 0);
  foo$.subscribe(e => 0);
  foo$.subscribe(e => 0);

  return foo$
      .map(e => {
        const todo = {
          id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
          text: e.detail
        }
        console.log('intent.js - creating ', todo);
        return todo;
      })
}

export default function intent(DOM) {
    return {
        addTodo: addTodo(DOM),
        removeTodo: removeTodo(DOM)
    }
}
