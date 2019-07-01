import React from 'react';
import './App.css';
import { config } from './config';

function App() {

  const APP_ID = config.APP_ID;
  const APP_KEY = config.APP_KEY;
  const example_request = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  console.log(example_request);

  return (
    <div className="App">
      <form action="" className="search-form">
        <input type="text" className="search-bar"/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
