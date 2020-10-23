import React from "react";

const Content = () => {
  return (
    <div title="Add to Calendar" className="addevent">
      Add to Calendar
      <span className="start">06-11-2020 08:00</span>
      <span className="end">06-11-2020 10:00</span>
      <span className="timezone">America/Los_Angeles</span>
      <span className="title">Summary of the event</span>
      <span className="description">Description of the event</span>
      <span className="location">Location of the event</span>
      <a href="https://www.google.com/calendar/render?action=TEMPLATE&text=Your+Event+Name&dates=20140127T224000Z/20140320T221500Z&details=For+details,+link+here:+http://www.example.com&location=Waldorf+Astoria,+301+Park+Ave+,+New+York,+NY+10022&sf=true&output=xml">
        Add to google
      </a>
    </div>
  );
};

export default Content;
