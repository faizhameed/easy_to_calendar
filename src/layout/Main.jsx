import moment from "moment";
import React, { useState, useRef } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import InputDetails from "../components/InputDetails";
import { TextArea, MainContent } from "./Main.sc";

const Main = () => {
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
      ...state,
      data,
      googleLink: `https://www.google.com/calendar/render?action=TEMPLATE&text=${data.title}&dates=${data.startDate}/${data.endDate}&details=${data.description}&location=${data.location}=true&output=xml`,
    });
  };

  const Button = styled.button`
    display: block;
    color: palevioletred;
    font-size: 1em;
    margin: 0.5em 0;
    padding: 0.5em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    cursor: pointer;
    background: papayawhip;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  `;
  const copyToClipboard = (e) => {
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    setState({ copied: true });
  };

  return (
    <MainContent>
      <Header />
      <InputDetails generateLink={generateLink} />
      <div>
        <div>
          <TextArea ref={textAreaRef} value={state.googleLink} />
          <div>
            <Button onClick={copyToClipboard}>Copy Link</Button>
          </div>
        </div>
      </div>
    </MainContent>
  );
};

export default Main;
