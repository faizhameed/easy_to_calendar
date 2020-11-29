import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
  display: block;
`;

const Button = styled.button`
  display: block;
  color: palevioletred;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.5em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
  background: papayawhip;
`;
const InputDetails = ({ generateLink }) => {
  const dtStart = React.useRef();
  const dtEnd = React.useRef();
  const descRef = React.useRef();

  return (
    <div>
      <form>
        <Input name="eventStart" type="datetime-local" ref={dtStart} />
        <Input name="eventEnd" type="datetime-local" ref={dtEnd} />
        <Input type="text" name="description" ref={descRef} />
        <Button
          onClick={(e) => {
            e.preventDefault();
            generateLink({
              startDate: dtStart.current.value,
              endDate: dtEnd.current.value,
              description: descRef.current.value,
            });
          }}
        >
          Generate Link
        </Button>
      </form>
    </div>
  );
};

export default InputDetails;
