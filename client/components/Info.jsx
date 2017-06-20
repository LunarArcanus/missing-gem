import React from 'react';
import {GemExample} from './Gem.jsx';


export default class Info extends React.Component {
  render() {
    return (
     <div>
        Welcome! The goal of the game is to find the missing gem <GemExample />. It is hidden inside one of the
        houses...
        <br/><br/>
        Can you guess which one?
      </div>
      );
  }
}