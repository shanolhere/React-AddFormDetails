import React from "react";
import styles from "./EventsList.module.css";

const EventsList = ({ events }) => {
  // const Delete = (e) => {
  //   //console.log(e.target.parentElement);
  //   // const element = e.target.parentElement;
  //   // element.style = { display: "none" };
  //   const setUnShowEvent = true;
  // };
  let setUnShowEvent = false;

  const Delete = (e) => {
    setUnShowEvent = true;
    e.target.parentElement.style.display = "none";
    //console.log(e.target.parentElement);
  };
  return (
    <>
      {events.map((event, index) => (
        <div className={styles.card} key={event.id}>
          <h1>{event.title}</h1>
          <p>{event.date}</p>
          <button className="delete" onClick={Delete}>
            Delete Event
          </button>
        </div>
      ))}
    </>
  );
};

export default EventsList;
