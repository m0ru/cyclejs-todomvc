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
  return DOM.get('.cycleCustomElement-SUBMIT-FIELD.new-todo', 'submittodo')
      .map(e => {
          const todo = {
              id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
              text: e.detail
          }
          console.log('creating ', todo);
          return todo;
        });
}

export default function intent(DOM) {
    return {
        addTodo: addTodo(DOM),
        removeTodo: removeTodo(DOM)
    }
}
