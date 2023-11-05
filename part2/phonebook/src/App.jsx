import { useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }])
  const [newName, setNewName] = useState("")
  const addNum = (event) => {
    event.preventDefault()
    const newContact = {
      name: newName
    }
    setPersons(persons.concat(newContact))
    setNewName("")
    
  }

  const handleNote = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNum}>
        <div>
          name: <input onChange={handleNote}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {newName}
    </div>
  )
}

export default App
