import React from 'react';
import ReactDOM from 'react-dom';

import Score from './components/Score.jsx';
import {Houses} from './components/House.jsx';
import Info from './components/Info.jsx';
import Header from './components/Header.jsx';

import './styles/style.scss';


ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Info />, document.getElementById('information'));
ReactDOM.render(<Score />, document.getElementById('score'));

const rowClassNodes = document.getElementsByClassName('int-row');
for (let x = 0; x < rowClassNodes.length; x++) {
    ReactDOM.render(<Houses columns="3" />, rowClassNodes[x]);
}