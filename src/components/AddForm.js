import React, { useState } from "react";
import "./AddForm.css";

const AddForm = ({ addEvent }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  const reset = () => {
    setText("");
    setDate("");
  };

  const submit = (e) => {
    e.preventDefault();
    const event = {
      title: text,
      date: date,
      id: Math.floor(Math.random() * 10000)
    };
    addEvent(event);
    //console.log(event);
    reset();
  };

  return (
    <>
      <form className="form">
        <div className="text">
          <label>Add Title</label>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
        <br />
        <div className="date">
          <label>Add Date</label>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>
        <br />
        <p>
          text - {text} and date picked - {date}
        </p>
        <br />
        <div className="btns">
          <input type="submit" onClick={submit} />
          <input type="reset" onClick={reset} />
        </div>
        <br />
      </form>
    </>
  );
};

export default AddForm;
