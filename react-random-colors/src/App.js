import React from 'react'
import './App.css';
import axios from "axios"

function App() {
  const [colors, setColors] = React.useState({})



  React.useEffect(function () {
    axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(res => {
        console.log(res.data)
        setColors(res.data.new_color)
      })
      .catch(err => console.log(err))
  }, [])



  return (
    <div className="random" style={{ background: `#${colors}` }}></div>

  )
}


export default App;
