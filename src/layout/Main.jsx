import moment from "moment";
import React, { useState, useRef } from "react";
import Header from "../components/Header";
import InputDetails from "../components/InputDetails";
import { TextArea } from "./Main.sc";

const Main = ({ children }) => {
  const [state, setState] = useState({
    data: {
      description: "the+no+description",
    },
    googleLink: "",
    copied: false,
  });
  const textAreaRef = useRef();
  const generateLink = (data) => {
    data.description.replace(" ", "+");
    data.title.replace(" ", "+");
    data.location.replace(" ", "+");
    data.startDate = moment(data.startDate).format("YYYYMMDDTHHMMSS");
    data.endDate = moment(data.endDate).format("YYYYMMDDTHHMMSS");
    setState({
      data,
      googleLink: `https://www.google.com/calendar/render?action=TEMPLATE&text=${data.title}&dates=${data.startDate}/${data.endDate}&details=${data.description}&location=${data.location}=true&output=xml`,
    });
  };

  const copyToClipboard = (e) => {
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    setState({ copied: true });
  };

  return (
    <div>
      <Header />
      <InputDetails generateLink={generateLink} />
      <div>{children}</div>
      <div>
        <div>
          <TextArea ref={textAreaRef} value={state.googleLink} />
          <button onClick={copyToClipboard}>Copy Link</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
