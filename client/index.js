import React from 'react';
import ReactDOM from 'react-dom';
import {Score, Header, Info} from './components/App.jsx';
import './styles/style.scss';


ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Info />, document.getElementById('information'));
ReactDOM.render(<Score />, document.getElementById('score'));