import Header from "./components/Header"
import './App.css';
import Main from "./components/Main"
import data from "./data"
import Footer from "./components/Footer"


function App() {
const cardData = data.map(function(item) {
  return <Main
            place={item.place}
            price={item.price}
            timeToGo={item.timeToGo}
        />
})

  return (
    <div>
      <Header/>
      {cardData}
      <Footer/>
    </div>


  )
}

export default App;
