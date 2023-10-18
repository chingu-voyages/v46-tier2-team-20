// import { useState } from "react";
import './App.css';
import axios from 'axios';

function App() {
  async function fetchData(ingredientString) {
    const options = {
      method: 'GET',
      url: 'https://tasty.p.rapidapi.com/recipes/list',
      params: {
        from: '0',
        size: '20',
        q: ingredientString,
      },
      headers: {
        'X-RapidAPI-Key': '76d7fe0a0fmsh0e82783d702bde2p14d53ajsn1fb5e9f06c51',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  fetchData('green onion eggplant');

  return (
    <div>
      <h1 className="text-3xl text-orange-500 font-bold underline text-center">
        Recipe App
      </h1>
    </div>
  );
}

export default App;
