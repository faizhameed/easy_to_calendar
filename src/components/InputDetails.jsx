import React from "react";

const InputDetails = () => {
  const dateTimeRef = React.useRef(() => {
    console.log("time changes", dateTimeRef.current.value);
  });
  return (
    <div>
      <input type="datetime-local" ref={dateTimeRef} />
    </div>
  );
};

export default InputDetails;
