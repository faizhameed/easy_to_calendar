import moment from "moment";
import React, { useState } from "react";
import Header from "../components/Header";
import InputDetails from "../components/InputDetails";

const Main = ({ children }) => {
  const [state, setState] = useState({
    data: {
      description: "the+no+description",
    },
    googleLink: "",
  });
  const generateLink = (data) => {
    data.description.replace(" ", "+");
    data.title.replace(" ", "+");
    data.location.replace(" ",'+')
    data.startDate = moment(data.startDate).format("YYYYMMDDTHHMMSS");
    data.endDate = moment(data.endDate).format("YYYYMMDDTHHMMSS");
    setState({
      data,
      googleLink: `https://www.google.com/calendar/render?action=TEMPLATE&text=${data.title}&dates=${data.startDate}/${data.endDate}&details=${data.description}&location=${data.location}=true&output=xml`,
    });
  };

  const copyToClipboard = (e) => {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
  };



  return    (
    <div>
      <Header />
      <InputDetails generateLink={generateLink} />
      <div>{children}</div>
      <div>{
        (state.googleLink)&&  

       
        <div><a href={state.googleLink}>Add to Calendar Generated</a>
        <button>Copy Link</button>
        </div>
        }
      </div>
    </div>
  );
};

export default Main;
