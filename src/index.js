import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/App';
import store from './store';
import { Provider } from 'react-redux';

const root = document.querySelector('#root');
ReactDOM.render(<HashRouter><Provider store= {store}><App /></Provider></HashRouter>, root);