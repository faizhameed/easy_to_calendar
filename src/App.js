import React, { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import ThemeContext from "./context/theme-context";
import Main from "./layout/Main";

function App() {
  const [state, setState] = useState({
    mode: "dark",
  });
  const toggleMode = () => {
    setState((state) => {
      return {
        ...state,
        mode: state.mode === "light" ? "dark" : "light",
      };
    });
  };
  return (
    <ThemeContext.Provider value={state.mode}>
      <div className="App">
        <Main>
          <ThemeContext.Consumer>
            {(value) => <Content check={value} toggleMode={toggleMode} />}
          </ThemeContext.Consumer>
        </Main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
