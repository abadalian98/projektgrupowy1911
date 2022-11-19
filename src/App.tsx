import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Container from './layout/Container';
import "./styles/App.css";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Container/>
    </div>
    </BrowserRouter>
  );
}

export default App;
