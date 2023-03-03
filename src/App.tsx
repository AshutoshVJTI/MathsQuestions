import MathJaxContext from "better-react-mathjax/MathJaxContext";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import MathQuestions from "./components/MathQuestions";

function App() {
  return (
    <div className="App">
      <Header />
      <MathJaxContext>
        <MathQuestions />
      </MathJaxContext>
    </div>
  );
}

export default App;
