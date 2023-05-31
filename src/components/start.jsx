import React, { useRef } from "react";
import App from "../App.css";

const Start = ({ setUser }) => {
  const inputRef = useRef();

  const handleClik = () => {
    inputRef.current.value && setUser(inputRef.current.value);
  };
  return (
    <div className="start">
        <h1>Quiz App</h1>
      <input
        type="text"
        placeholder="Enter your name.."
        className="startInput"
        ref={inputRef}
      />
      <button className="startBtn" onClick={handleClik}>
        START
      </button>
    </div>
  );
};

export default Start;
