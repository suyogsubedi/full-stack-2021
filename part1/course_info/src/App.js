const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  );
};
const Content = (props) => {
  return (
    <>
      {props.course.parts.map((values) => (
        <>
          <span>{values.name}: </span>
          <span>{values.exercises}</span> <br></br>
        </>
      ))}
    </>
  );
};
const Total = (props) => {
  return (
    <>
      <span>
        Total :{" "}
        {props.course.parts[0].exercises +
          props.course.parts[1].exercises +
          props.course.parts[2].exercises}
      </span>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
