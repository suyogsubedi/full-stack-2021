import { useState } from "react";
const Heading = ({ Heading }) => {
  return <h2>{Heading}</h2>;
};
const Button = ({ eventHandler, review }) => {
  return (
    <>
      <button onClick={eventHandler}>{review}</button>
    </>
  );
};
const Statistic = ({
  goodText,
  neutralText,
  badText,
  good,
  neutral,
  bad,
  allText,
  all,
  averageText,
  average,
  positiveText,
  positive,
}) => {
  if (all === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>{goodText} </td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>{neutralText}</td> <td>{neutral}</td>
          </tr>
          <tr>
            <td>{badText}</td> <td> {bad}</td>
          </tr>
          <tr>
            <td> {allText} </td> <td>{all}</td>
          </tr>
          <tr>
            <td>{averageText}</td>
            <td> {average}</td>
          </tr>
          <tr>
            <td>{positiveText}</td>
            <td> {positive} %</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const goodHandler = () => {
    setGood(good + 1);
  };
  const badHandler = () => {
    setBad(bad + 1);
  };
  const neutralHandler = () => {
    setNeutral(neutral + 1);
  };
  const all = good + bad + neutral;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;
  // const positive
  return (
    <div>
      <Button eventHandler={goodHandler} review="good" />
      <Button eventHandler={neutralHandler} review="neutral" />
      <Button eventHandler={badHandler} review="bad" />
      <Heading Heading="Statistics" />
      {/* heading, reviewText, good, neutral, bad */}
      <Statistic
        goodText="good"
        good={good}
        neutralText="neutral"
        neutral={neutral}
        badText="bad"
        bad={bad}
        allText="all"
        all={all}
        averageText="average"
        average={average}
        positiveText="positive"
        positive={positive}
      />
    </div>
  );
};

export default App;
