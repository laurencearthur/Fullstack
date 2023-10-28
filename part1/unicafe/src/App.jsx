import { useState } from "react"

const Button = ({ click, text }) => <button onClick={click}>{text}</button>

const Maths = (props) => (
  <>
    {props.name} {props.property}
  </>
)
const Statistics = ({ good, neutral, bad }) => {
  const sum = good + neutral + bad
  let avg = (good - bad) / sum
  let per = (good / sum) * 100
  per.toFixed(2)
  if (sum === 0) return <p>No feedback</p>
  return (
    <table>
      <tr>
        <td>
          <Maths name="good" />
        </td>
        <td>
          <Maths property={good} />
        </td>
      </tr>
      <tr>
        <td>
          <Maths name="neutral" />
        </td>
        <td>
          <Maths property={neutral} />
        </td>
      </tr>
      <tr>
        <td>
          <Maths name="bad" />
        </td>
        <td>
          <Maths property={bad} />
        </td>
      </tr>
      <tr>
        <td>average</td>
        <td>{avg}</td>
      </tr>
      <tr>
        <td>positive</td>
        <td>{per}%</td>
      </tr>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [value, setValue] = useState([0])
  const clickGood = () => {
    const goodValue = good + 1
    setGood(goodValue)
    console.log("good", goodValue)
    setValue(goodValue + neutral + bad)
  }

  const clickNeutral = () => {
    const neutarlValue = neutral + 1
    setNeutral(neutarlValue)
    console.log("neutral", neutarlValue)
    setValue(neutarlValue + good + bad)
  }

  const clickBad = () => {
    const badValue = bad + 1
    setBad(badValue)
    console.log("bad", badValue)
    setValue(badValue + good + neutral)
  }

  return (
    <>
      <h1>give feedback</h1>
      <Button click={() => clickGood()} text="good" />
      <Button click={() => clickNeutral()} text="neutral" />
      <Button click={() => clickBad()} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
