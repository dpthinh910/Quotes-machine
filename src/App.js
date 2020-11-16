import React, {useState,useEffect} from 'react';
import {random} from 'lodash';
import './App.css';
import Button from './components/Button';
 const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [randomIndex, setRandomIndex] = useState();
  const [color, setColor] = useState('#0c1446');
  useEffect(() => {
    async function getData(){
      try {
      const response = await fetch(url);
      const responseData = await response.json();
      setQuotes(responseData.quotes);
    }
   catch(error) {
      console.log('Error found: ', error.message);
  }
    };
    getData();
    setRandomIndex(selectQuoteIndex);
  },[]);
  useEffect(() => {
    function changeColor() {
      const colors = [
        "#023e8a",
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857',
        '#00b4d8',
        '#457b9d',
        '#8d99ae',
        '#ffd166'
      ];
      const color = Math.floor(Math.random() * colors.length);
      setColor(() => {
        return (
          document.body.style = `background-color: ${colors[color]}`
        );
      })
    };
    console.log(color)
    changeColor();
  },[randomIndex])
  const selectedQuote = () => {
    if((!quotes.length) || !Number.isInteger(randomIndex))
    {
      return undefined;
    }
    return quotes[randomIndex];
  }

  const selectQuoteIndex = () => {
    if(!quotes.length){
      return undefined;
    }
    else{
      return random(0, quotes.length -1);
    }
  }
    return (
      <div className="App">
        <div className="quote-box">
        {selectedQuote() ? `"${quotes[randomIndex].quote}" - ${quotes[randomIndex].author}` : ''}
        <Button className="button" setRandomIndex={setRandomIndex} quotes={quotes} color={color} setColor={setColor} />
      </div>
      <div className="footer">by dpthinh</div>
      </div>
    );
  }
  

export default App;
