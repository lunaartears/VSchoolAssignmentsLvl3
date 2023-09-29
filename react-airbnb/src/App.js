import React from "react"
import './App.css';
import Card from "./components/Card"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import data from "./data"

function App() {
  const cardData = data.map(function(ele) {
    return <Card
    key={ele.id}  // use this key prop to get fix Warning: each child should have a key prop. (give the array an id:1)
    title={ele.title}
    description={ele.description}
    price={ele.price}
    coverImg={ele.coverImg}
    rating={ele.stats.rating}
    reviewCount={ele.stats.reviewCount}
    location={ele.location}
    openSpots={ele.openSpots}

          />
  })
  return (
    <div>
        <div>
            <Navbar/>
            <Hero/>
            {cardData}
        </div>
    </div>
  );
}

export default App;
