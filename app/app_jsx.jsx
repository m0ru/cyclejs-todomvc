/** @jsx hJSX */
import Cycle from '@cycle/core';
import {makeDOMDriver, hJSX} from '@cycle/dom';

console.log('app_jsx.jsx loaded.');

function main(drivers) {
  return {
    //DOM: drivers.DOM.get('#mytoggle', 'click')
    DOM: drivers.DOM.get('#masterbutton', 'click')
      .map(ev => ev.target.checked)
      .startWith(false)
      //.map(clicked => console.log('clicked: ', clicked))
      .map(toggled =>
        <div>
          <input id="mytoggle" type="checkbox" /> Toggle me
          <p>{toggled ? 'ON' : 'off'}</p>
        </div>
      )
  };
}

let drivers = {
  DOM: makeDOMDriver('#helloCycleContainer')
};

Cycle.run(main, drivers);
