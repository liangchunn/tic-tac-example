import React from "react";

// dumb component that just shows a button, has a value and an onClick handle passed from the parent
const Square = ({ updateHandler, value }) => (
  <button onClick={updateHandler}>{value}</button>
);

export default Square;
