import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import Hero from './components/hero.jsx'
import Form from './components/form'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Hero />, document.getElementById('hero'));
ReactDOM.render(<Form />, document.getElementById('root'));

serviceWorker.unregister();
