import React from "react";

const InputDetails = () => {
  const dtStart = React.useRef();
  const dtEnd = React.useRef();
  const descRef = React.useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      dtStart.current.value,
      dtEnd.current.value,
      descRef.current.value
    );
  };
  return (
    <div>
      <form>
        <input name="eventStart" type="datetime-local" ref={dtStart} />
        <input name="eventEnd" type="datetime-local" ref={dtEnd} />
        <input type="text" name="description" ref={descRef} />
        <input type="submit" value="Generate Link" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default InputDetails;
