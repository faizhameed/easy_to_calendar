import React from "react";

const Content = () => {
  return (
    <div title="Add to Calendar" className="addevent">
      {/* Add to Calendar
      <p className="start">06-11-2020 08:00</p>
      <p className="end">06-11-2020 10:00</p>
      <p className="timezone">America/Los_Angeles</p>
      <p className="title">Summary of the event</p>
      <p className="description">Description of the event</p>
      <p className="location">Location of the event</p> */}
      <a href="https://www.google.com/calendar/render?action=TEMPLATE&text=Your+Event+Name&dates=20140127T224000Z/20140320T221500Z&details=For+details,+link+here:+http://www.example.com&location=Waldorf+Astoria,+301+Park+Ave+,+New+York,+NY+10022&sf=true&output=xml">
        Add to google
      </a>
    </div>
  );
};

export default Content;
