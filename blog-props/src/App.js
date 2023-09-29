
import React from "react"
import './App.css';
import Header from "./components/Header"
import Bloglist from "./components/Bloglist"
import data from "./components/data"
//import Footer from "./components/Footer"

function App() {

const posts = data.map(item => {
  return (
    <Bloglist
      title={item.title}
      subTitle={item.subTitle}
      author={item.author}
      date={item.date}
    />
  )
})

  return (
    <div>
      <Header/>
      {posts}
      <button>Older Posts</button>
    </div>

  )
}

export default App;
