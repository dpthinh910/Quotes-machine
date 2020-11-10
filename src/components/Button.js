import { random } from 'lodash';
import React from 'react';
import '../App.css';


const Button = ({quotes,setRandomIndex}) => {
  function eventHandler(e) {
    e.preventDefault();
    setRandomIndex(() => {
      return random(0,quotes.length -1);
    })
  }
  return (
    <div idName="quote-box">
      <button className="button" onClick={eventHandler}>New Quote</button>
    </div>
  );

}

export default Button;