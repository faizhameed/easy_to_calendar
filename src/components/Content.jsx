import React from "react";

const Content = (props) => {
  console.log(props);
  return (
    <div title="Add to Calendar" className="addevent">
      <div>Mode:{props.check}</div>
      <button onClick={props.toggleMode}>toggle</button>
    </div>
  );
};

export default Content;
