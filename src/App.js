import React from "react";
import "./App.css";
import Content from "./components/Content";
import ThemeContext from "./context/theme-context";
import Main from "./layout/Main";

function App() {
  return (
    <ThemeContext.Consumer>
      <div className="App">
        <Main>
          <Content />
        </Main>
      </div>
    </ThemeContext.Consumer>
  );
}

export default App;
