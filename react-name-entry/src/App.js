import React from "react"
import './App.css';

function App() {

  const [namesList, setNamesList] = React.useState([])
  const [name, setName] = React.useState("")
  function handleChange(event) {
    setName(event.target.value)
  }

  function handleClick(event) {
    setNamesList(prevNames => [...prevNames, name])
    setName("")
  }

  let namesArr = namesList.map(name => <ol className="names-list">{name}</ol>)

  return(
    <div>
      <input
        type='text'
        placeholder='Name'
        name='input'
        value={name}
        onChange={handleChange}
        className="input-box"

      />
      <h1>{name}</h1>
      <button className="button" onClick={handleClick}>Add name</button>
      {namesArr}
    </div>
  )
}

export default App;
