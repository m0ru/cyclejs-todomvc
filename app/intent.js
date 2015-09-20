;
function removeTodo(DOM) {
  return DOM
    .get('.cycleCustomElement-TODO-ITEM', 'delete')
    .map(id => {
        console.log('removing ', id.detail);
        return Number.parseInt(id.detail);
    });
}

export default function intent(DOM) {
    return {
        addTodo: DOM
            .get('.cycleCustomElement-SUBMIT-FIELD.new-todo', 'submit')
            .map(e => e.detail),
        removeTodo: removeTodo(DOM)
    }
}
