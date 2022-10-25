import quote from "./quote.json"
import { useState } from 'react';
import "./App.css"
const Phrases = () => {
  const randomIndexQuote = Math.floor(Math.random() * quote.length);
  const [indexQuote, setIndexQuote] = useState(randomIndexQuote);

  const changeQuote = () => {
    const anotherRandomQuote = Math.floor(Math.random() * quote.length);
    setIndexQuote(anotherRandomQuote)
  };
  const colors = [
    "#845EC2",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#FFC75F",
    "#F9F871"
  ];
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[randomColorIndex]}`;


  return (
    <div className="App">
      <div className="card">
        <h1>{quote[indexQuote].quote}</h1>
        <h1>{quote[indexQuote].author}</h1>
        <button onClick={changeQuote}><i class="fa-solid fa-rotate" ></i></button>
      </div>
    </div>
  );
};

export default Phrases;