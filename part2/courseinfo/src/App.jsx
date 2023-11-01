const Course = ({ course }) => {
  return <h1>{course}</h1>
}

const Content = ({ name, exercises }) => {
  return (
    <>
      <p>
        {name} {exercises}
      </p>
    </>
  )
}

const Sum = ({exercises}) => {
  return (
    <>
      <h3>total of exercises {exercises}</h3>
    </>
  )
}

const App = () => {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  const exercises = course[0].parts.map((exercise) => exercise.exercises)
  const total = exercises.reduce((a,b) => a+b,0)

  const exercises1 = course[1].parts.map((exercise) => exercise.exercises)
  const total1 = exercises1.reduce((a,b) => a+b,0)
  return (
    <>
      <h1>Web development curriculum</h1>
      <Course course={course[0].name} />
      <Content name={course[0].parts[0].name} exercises={course[0].parts[0].exercises} />
      <Content name={course[0].parts[1].name} exercises={course[0].parts[1].exercises} />
      <Content name={course[0].parts[2].name} exercises={course[0].parts[2].exercises} />
      <Sum exercises={total} /> 

      <Course course={course[1].name} />
      <Content name={course[1].parts[0].name} exercises={course[1].parts[0].exercises} />
      <Content name={course[1].parts[1].name} exercises={course[1].parts[1].exercises} />
      <Sum exercises={total1} />

    </>
  )
}

export default App
