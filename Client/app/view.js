/** @jsx hJSX */
import Cycle from '@cycle/core';
import {hJSX} from '@cycle/dom';
import todoItem from './todo-item';

function todos2Lis(todos) {
    return todos.toArray().map(todo =>
        <li attributes={{'data-id': todo.id}}>
            <todo-item
                value={ todo.text }
                todo-id = { todo.id }/>
        </li>
    );
}

//s/div action/form action/
export default function view(state$) {
    return state$.map( ({todos}) =>
        <div>
            <div action="" id="add-todo-form">
                <input type="text" id="todo-text" name="todotext"></input>
                <button id="todo-button" class="action-button">Add</button>
            </div>

            <ul id="todo-list">
                { todos2Lis(todos) }
            </ul>
        </div>
    );
}
