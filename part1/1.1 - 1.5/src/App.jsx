const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      }
    ]
  };

  return (
    <>
      <h2>{course.name} </h2>
      <h2>{course.parts[0].name} {course.parts[0].exercises} </h2>
      <h2>{course.parts[1].name} {course.parts[1].exercises} </h2>
      <h2>{course.parts[2].name} {course.parts[2].exercises} </h2>
      <h3>Total exercises: {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} </h3>
    </>
  );
};

export default App;
