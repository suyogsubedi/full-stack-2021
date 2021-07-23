import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  const pointsHandler = () => {
    const point = [...points];
    // selected value is a number
    point[selected] += 1;
    setPoints(point);
    console.log(point);
  };

  const anecdotesHandler = () => {
    const randomNumberGenerator = Math.floor(Math.random() * 7);
    setSelected(randomNumberGenerator);
  };
  //   mostVotes
  const mostVotes = () => {
    let numberOfVotes = 0;
    let index = 0;
    for (let i = 0; i < points.length; i++) {
      if (points[i] > numberOfVotes) {
        numberOfVotes = points[i];
        index = i;
      }
    }
    return index;
  };
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} <br />
      <p>has {points[selected]} votes</p>
      <button onClick={pointsHandler}>vote</button>
      <button onClick={anecdotesHandler}>next anecdote</button>
      <i>
        <h2>Most Voted anecdotes</h2>
      </i>
      <p>{anecdotes[mostVotes()]}</p>
      <p>has {points[mostVotes()]} votes</p>
    </div>
  );
};

export default App;
