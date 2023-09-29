
import './App.css';
import React from "react"


function App() {
  const [colorsArr, setColorsArr] = React.useState(["white", "white", "white", "white"])

  let styles = {
    border: 'solid 2pt gold',
  }

  const colors = colorsArr.map(color => (
    <div style={{ ...styles, backgroundColor: color }} className='color'></div>
  ))

  function blkWht() {
    setColorsArr(previous => {
      if (previous[0] === 'white') {
        return ['black', 'black', 'black', 'black']
      } else
        if (previous[0] !== 'white') {
          return ['white', 'white', 'white', 'white']
        }
    })
  }

  function purple() {
    setColorsArr(prev => {
      let lastTwo = prev.slice(2)
      return ["purple", "purple", ...lastTwo]
    })
  }

  function blueRight() {
    setColorsArr(prev => {
      let firstThree = prev.slice(0, 3)
      return [...firstThree, "blue"]
    })
  }

  function blueLeft() {
    setColorsArr(prev => {
      let firstTwo = prev.slice(0, 2)
      let lastOne = prev.slice(3)
      return [...firstTwo, "blue", ...lastOne]
    })
  }

  function redTL() {
    setColorsArr(prev => {
      let lastThree = prev.slice(1)
      return ["red", ...lastThree]
    })
  }

  function redTR() {
    setColorsArr(prev => {
      let firstOne = prev.slice(0, 1)
      let lastTwoIndex = prev.slice(2)
      return [...firstOne, "red", ...lastTwoIndex]
    })
  }

  function redBL() {
    setColorsArr(prev => {
      let firstTwoIndex = prev.slice(1, 2)
      let lastOneIndex = prev.slice(3)
      return [...firstTwoIndex, "red", ...lastOneIndex]
    })
  }

  function redBR() {
    setColorsArr(prev => {
      let firstThreeIndex = prev.slice(0, 3)
      return [...firstThreeIndex, "red"]
    })
  }

  return (
    <div className='display'>
      {colors}
      <button onClick={blkWht} className='smalls-button'>DJ Smalls</button>
      <button onClick={purple} className='party-button'>DJ Party</button>
      <button onClick={blueLeft} className='pro-button-left'>DJ Pro Left</button>
      <button onClick={blueRight} className='pro-button-right'>DJ Pro Right</button>
      <button onClick={redTL} className='tl-button'>DJ Big Time TL</button>
      <button onClick={redTR} className='tr-button'>DJ Big Time TR</button>
      <button onClick={redBL} className='bl-button'>DJ Big Time BL</button>
      <button onClick={redBR} className='br-button'>DJ Big Time BR</button>
    </div>
  )
}



export default App;
