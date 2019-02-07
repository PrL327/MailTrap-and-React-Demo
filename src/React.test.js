import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/form.jsx';
import Hero from './components/hero.jsx';

it('Form renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Hero renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hero />, div);
  ReactDOM.unmountComponentAtNode(div);
});
