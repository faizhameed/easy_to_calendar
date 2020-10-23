import React from "react";
import Header from "../components/Header";

const Main = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Main;
