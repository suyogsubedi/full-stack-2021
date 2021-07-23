import React, { useState } from "react";

const Display = (props) => {
  return <div>{props.counter}</div>;
};
const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const SimpleUseState = (props) => {
  const [counter, setCounter] = useState(0);
  const increaseByOne = () => {
    setCounter(counter + 1);
  };
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => {
    setCounter(0);
  };

  return (
    <>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="Plus" />

      <Button handleClick={decreaseByOne} text="Subtract" />

      <Button handleClick={setToZero} text="Reset" />
    </>
  );
};

export default SimpleUseState;
