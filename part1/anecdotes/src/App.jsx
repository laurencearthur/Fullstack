import { useState } from "react"

const Button = ({ click, text }) => <button onClick={click}>{text}</button>

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [maxVote, setMaxVote] = useState(0)

  const clickVote = () => {
    const votesCopy = [...votes]
    votesCopy[selected]++
    setVotes(votesCopy)
    if (votes[selected] >= votes[maxVote]) {
      setMaxVote(selected)
    }
  }

  const RandomQuotes = () => {
    const quote = Math.floor(Math.random() * anecdotes.length)
    setSelected(quote)
  }
  return (
    <div>
      <h1>Anecdotes of the day</h1>
      {anecdotes[selected]}
      <br />
      has {votes[selected]} votes
      <br />
      <Button click={() => clickVote()} text="vote" />
      <Button click={() => RandomQuotes()} text="next anecdotes" />
      <h1>Anecdotes with most votes</h1>
      {anecdotes[maxVote]}
      <br />
      has {votes[maxVote]} votes
    </div>
  )
}

export default App
