import Immutable from 'immutable';

export default function model(actions) {

    let addMod$ = actions.addTodo
        .map(todo => todos => todos.set(todo.id, todo));

    let removalMod$ = actions.removeTodo
        .map(id => todos => todos.remove(id));

    let todos$ = Cycle.Rx.Observable
        .merge(addMod$, removalMod$)
        .startWith(Immutable.Map())
        .scan((todos, mod) => mod(todos));

    return Cycle.Rx.Observable.combineLatest(
        todos$,
        (todos) => ({todos})
    )
}
