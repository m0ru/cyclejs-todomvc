import Immutable from 'immutable';

export default function model(actions) {
    window.actions = actions; // for debugging

    let addMod$ = actions.addTodo3
        .map(text => ({
            id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
            text
        }))
        .map(todo => todos => todos.set(todo.id, todo));

    let removalMod$ = actions.removeTodo
        .map(id => todos => {
            window.someId = id;
            window.todosBefore = todos;
            let ret = todos.remove(id)
            window.todosAfter = ret;
            return ret;
        });

    let todos$ = Cycle.Rx.Observable
        .merge(addMod$, removalMod$)
        .startWith(Immutable.Map())
        .scan((todos, mod) => {
            console.log('modifying state')
            let ret = mod(todos)
            return ret;
        });

    return Cycle.Rx.Observable.combineLatest(
        todos$,
        (todos) => ({todos})
    )
}
