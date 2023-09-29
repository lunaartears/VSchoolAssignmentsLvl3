import React from "react"
import Jokes from "./Jokes"
import './App.css';
import jokesData from "../src/jokesData"

function App() {
  const jokeElements = jokesData.map(function(joke) {
    return <Jokes setup={joke.setup} punchline={joke.punchline}/>
  })

  return (
    <div>
      {jokeElements}
    </div>
  );
}

export default App;
