import React, {useState,useEffect} from 'react';
import {random} from 'lodash';
import './App.css';
import Button from './components/Button';
 const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [randomIndex, setRandomIndex] = useState();
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
        <Button className="button" setRandomIndex={setRandomIndex} quotes={quotes} />
      </div>
      <div className="footer">by dpthinh</div>
      </div>
    );
  }
  

export default App;
