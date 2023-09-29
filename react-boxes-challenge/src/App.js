import React from "react"
import './App.css';
import boxes from "./boxes"
import Box from "./Box"

function App() {

  const [boxesArr, setBoxesArr] = React.useState(boxes)

  function Toggle(id) {
    setBoxesArr(prevBoxes => {
      let newBoxes = []
      for (let i = 0; i < prevBoxes.length; i++) {
        let currBox = prev[i]
        if (currBox.id === id) {
          const updatedBox = {
            ...currBox, on: !currBox.on
          }
          newBoxes.push(updatedBox)
        } else {
          newBoxes.push(currBox)
        }
      }
      return newBoxes
    })
  }

  // *shorter version of toggle function*
  //setBoxesArr(prev => {
  //  return prevBoxes.map((box) => {
  //  return box.id === id ? {...box, on: !box.on} : box
  //})
  //})

  const allBoxes = boxesArr.map(box => (
    <Box on={box.on} key={box.id} id={box.id} handleClick={Toggle} />
  ))

  return (
    <div>
      {allBoxes}
    </div>
  )
}



export default App;
