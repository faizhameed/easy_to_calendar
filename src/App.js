import React from "react";
import "./App.css";
import Content from "./components/Content";
import Main from "./layout/Main";

function App() {
  return (
    <div className="App">
      <Main>
        <Content />
      </Main>
    </div>
  );
}

export default App;
