;
function removeTodo(DOM) {
  return DOM
    .get('.cycleCustomElement-TODO-ITEM', 'delete')
    .map(id => Number.parseInt(id.detail));
}

function addTodo(DOM) {
  return DOM
      .get('.cycleCustomElement-SUBMIT-FIELD.new-todo', 'submittodo')
      .map(e => ({
              id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
              text: e.detail
          }))
       /*
       * there's a bug (probably in .get) due to which
       * the todo-creation gets evaluated for every
       * subscription (probably a cold observable somewhere)
       * .share turns it into a true hot observable.
       */
       .share();
}

export default function intent(DOM) {
    return {
        addTodo: addTodo(DOM),
        removeTodo: removeTodo(DOM)
    }
}
