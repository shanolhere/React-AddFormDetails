import React from "react";
import "./Modal.css";

const Modal = ({ children }) => {
  return (
    <>
      <div className="Modal-backdrop">
        <div className="Modal">{children}</div>
      </div>
    </>
  );
};

export default Modal;
