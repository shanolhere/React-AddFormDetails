import React, { useState } from "react";
import "./styles.css";
import Title from "./components/Title.js";
import Modal from "./components/Modal.js";
import AddForm from "./components/AddForm";
import EventsList from "./components/EventsList.js";

const Hello = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
    setShowModal(false);
  };

  return (
    <>
      <Title title="Welcome to React web Journey" />
      <div className="buttons">
        {!showEvents && (
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        )}
        {showEvents && (
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        )}
      </div>
      {/* showing events here and hide button */}
      {showEvents && (
        <div className="eventsbox">
          <EventsList events={events} />
        </div>
      )}

      <div className="AddFormBtn">
        <button onClick={() => setShowModal(true)}>Add Form</button>
      </div>
      {showModal && (
        <Modal>
          <AddForm addEvent={addEvent} />
          <button className="close" onClick={() => setShowModal(false)}>
            X
          </button>
        </Modal>
      )}
    </>
  );
};

export default Hello;
