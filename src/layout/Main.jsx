import React, { useState } from "react";
import Header from "../components/Header";
import InputDetails from "../components/InputDetails";

const Main = ({ children }) => {
  const [state, setState] = useState({
    data: "",
    googleLink: "",
  });
  const generateLink = (data) => {
    setState({ data });
    data.description.replace(" ", "+");
    setState({
      googleLink: `https://www.google.com/calendar/render?action=TEMPLATE&text=Your+Event+Name&dates=${data.startDate}/${data.endDate}&details=${data.description}&location=Waldorf+Astoria,+301+Park+Ave+,+New+York,+NY+10022&sf=true&output=xml`,
    });
  };
  return (
    <div>
      <Header />
      <InputDetails generateLink={generateLink} />
      <div>{children}</div>
      <p>Google Link</p>
      <div>
        <p>{state.googleLink}</p>
      </div>
    </div>
  );
};

export default Main;
