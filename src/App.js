import React, { useState } from "react";
import Header from "./Components/Header";
import "./App.css";

function App() {
  //Gettin actual date from system
  const actualDate = new Date().toISOString().slice(0, 10);
  //Set actual date to state
  const [date, setDate] = useState(actualDate);

  return (
    <div className="App">
      {/* Send props to Header */}
      <Header date={date} setDate={setDate} />
    </div>
  );
}

export default App;
