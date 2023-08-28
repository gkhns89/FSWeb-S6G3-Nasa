import React, { useState, useEffect } from "react";
import Main from "./Components/Main";
import Header from "./Components/Header";
import "./App.css";

function App() {
  //Gettin actual date from system
  const actualDate = new Date().toISOString().slice(0, 10);
  //Set actual date to state
  const [date, setdate] = useState(actualDate);


  
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
