import React from "react";
import Header from "../components/Header";
import InputDetails from "../components/InputDetails";

const Main = ({ children }) => {
  return (
    <div>
      <Header />
      <InputDetails />
      <div>{children}</div>
    </div>
  );
};

export default Main;
