import React from "react";

const InputDetails = ({ generateLink }) => {
  const dtStart = React.useRef();
  const dtEnd = React.useRef();
  const descRef = React.useRef();

  return (
    <div>
      <form>
        <input name="eventStart" type="datetime-local" ref={dtStart} />
        <input name="eventEnd" type="datetime-local" ref={dtEnd} />
        <input type="text" name="description" ref={descRef} />
        <input
          type="submit"
          value="Generate Link"
          onClick={(e) => {
            e.preventDefault();
            generateLink({
              startDate: dtStart.current.value,
              endDate: dtEnd.current.value,
              description: descRef.current.value,
            });
          }}
        />
      </form>
    </div>
  );
};

export default InputDetails;
