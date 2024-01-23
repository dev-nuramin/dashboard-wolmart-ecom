import React from "react";

const Greatings = () => {
  const date = new Date();
  let time = date.getHours();

  let greating = time < 12 ? "Good Morning!" : "Good Afternoon!";
  return greating;
};

export default Greatings;
