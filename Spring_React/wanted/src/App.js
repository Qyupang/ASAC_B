/*
Name : App.js
Title : Clone Coding https://www.wanted.co.kr/

Development Environment
- Device : DESKTOP-CDDOSTE
- Processor : 11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz   2.42 GHz
- RAM : 16.0GB
- Windows 10 Pro
- Window x64
*/

import React from "react";

import "./App.css";
import Header from "./pages/Header";
import Main from "./pages/Main";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default App;
