import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em 0;
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
  margin: 0.5em 0;
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
  const eventTitleRef = React.useRef();
  const locationRef = React.createRef();

  return (
    <div>
      <form>
        <div>Title</div>
        <Input
          type="text"
          placeholder="Your Event Title"
          name="title"
          ref={eventTitleRef}
        />
        <div>Description</div>
        <Input
          type="text"
          placeholder="Enter the description here"
          name="description"
          ref={descRef}
        />
        <div>Location</div>
        <Input
          type="text"
          placeholder="Location or link to the event"
          ref={locationRef}
        />
        <div>Start Date</div>
        <Input name="eventStart" type="datetime-local" ref={dtStart} />
        <div>End Date</div>
        <Input name="eventEnd" type="datetime-local" ref={dtEnd} />
        <Button
          onClick={(e) => {
            e.preventDefault();
            generateLink({
              title: eventTitleRef.current.value,
              description: descRef.current.value,
              location: locationRef.current.value,
              startDate: dtStart.current.value,
              endDate: dtEnd.current.value,
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
