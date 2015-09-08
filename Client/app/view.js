/** @jsx hJSX */
import Cycle from '@cycle/core';
import {hJSX} from '@cycle/dom';
import todoItem from './todo-item';

function todos2Lis(todos) {
    return todos.toArray().map(todo =>
        <li attributes={{'data-id': todo.id}}>
            <todo-item
                className="view"
                value={ todo.text }
                todo-id = { todo.id }/>
        </li>
    );
}

/*
            <li data-id="1441717656895" className="">
                <div className="view">
                    <input className="toggle" type="checkbox">
                    <label>asdf</label>
                    <button className="destroy"></button>
                </div>
            </li>
            */

//s/div action/form action/
export default function view(state$) {
     // button hidden atm for compliance with the official todomvc
    return state$.map( ({todos}) =>
        <section className="todoapp">
        	<header className="header">
        		<h1>todos</h1>
        		<input className="new-todo"
                    id="todo-text" name="todotext"
                    placeholder="What needs to be done?"
                    autofocus=""></input>
                <button id="todo-button"
                    className="action-button"
                    style="display:none">Add</button>
        	</header>

        	<section style="display: block;" className="main">
        		<input className="toggle-all" type="checkbox"></input>
        		<label htmlFor="toggle-all">Mark all as complete</label>
                <ul id="todo-list" className="todo-list">
                    { todos2Lis(todos) }
                </ul>
        	</section>

        	<footer style="display: block;" className="footer">
        		<span className="todo-count"><strong>3</strong> items left</span>
        		<ul className="filters">
        			<li>
        				<a href="#/" className="selected">All</a>
        			</li>
        			<li>
        				<a href="#/active">Active</a>
        			</li>
        			<li>
        				<a href="#/completed">Completed</a>
        			</li>
        		</ul>
        		<button style="display: none;" className="clear-completed"></button>
        	</footer>
        </section>
    );
}
