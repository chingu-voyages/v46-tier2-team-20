// import { useState } from "react";
import './App.css';

function App() {
  testFun();
  const testFun = () => {
    console.log('this is a test');
  };

  return (
    <div>
      <h1 className="text-3xl text-orange-500 font-bold underline text-center">
        Recipe App
      </h1>
    </div>
  );
}

export default App;
