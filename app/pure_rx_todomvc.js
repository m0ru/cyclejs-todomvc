import Rx from 'rx';

console.log('app.js loaded.');
console.log(h);

window.Rx = Rx; //for debugging
window.Cycle = Cycle; //for debugging

let btn = document.getElementById('masterbutton');
let clicks = Rx.Observable.fromEvent(btn, 'click')
             .map(() => 1)
             .scan((a,b) => a+b)
             .subscribe((e) => console.log('clicked ' + e + '-times'));


let todoBtn = document.getElementById('todo-button');
let todoText = document.getElementById('todo-text');
let todoList = document.getElementById('todo-list');

let addButtonClicks = Rx.Observable.fromEvent(todoBtn, 'click');

let actionStream  = addButtonClicks.map(() => ({add: todoText.value}));

let currentItems = actionStream.scan(function(items, action){
    let newItems;
    let toAdd = [];
    if(action.add) { toAdd = action.add }
    newItems = items.concat(toAdd); //clones the array as side-effect
    console.log('actionStream.scan:action: ', action)
    if(action.remove) {
        console.log('newItems before: ', newItems);
        newItems.splice(action.remove + 1, 1);
        console.log('newItems after: ', newItems);
    }
    return newItems
}, []);

currentItems.subscribe(function (items) {
    todoList.innerHTML = '';
    let closeButtonsStream = Rx.Observable.empty();
    for(let i = items.length - 1; i >= 0; i--) {
        let itm = items[i];

        let li = document.createElement('li');
        li.innerHTML = itm + ' ';

        let a = document.createElement('a');
        a.href = '#';
        a.innerHTML = 'x';

        li.appendChild(a);
        todoList.appendChild(li);

        let individualCloseBtnStream = Rx.Observable.fromEvent(a, 'click').map(() => ({remove: i}));
        closeButtonsStream = closeButtonsStream.merge(individualCloseBtnStream);
    }
    actionStream = actionStream.merge(closeButtonsStream);
    // TODO not the same actionStream-object anymore
    // all listeners stay with the old one
    actionStream.subscribe((idx) => console.log('action: ', idx))
});

currentItems.subscribe(items => console.log(items));

// http://cycle.js.org/model-view-intent.html
// https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/observable.md
// .reduce(...)
