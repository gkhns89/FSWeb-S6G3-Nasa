import React, { useState } from "react";
import Header from "./Components/Header";
import Background from "./bg.png";
import "./App.css";

function App() {
  return (
    <div
      className="text-center h-screen w-screen bg-no-repeat bg-cover py-[5%] px-[10%]"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className=" bg-[#1a1c21] rounded-3xl border-none ">
        {console.log("Header oluşuyor")}
        <Header />
      </div>
    </div>
  );
}

export default App;
