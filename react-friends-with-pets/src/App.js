import data from "./data"// Imagine an array of objects here
import './App.css';
import Friend from "./components/FriendsList"
import Pet from "./components/Pet"

function App() {
  let friendData = data.map(function (ele) {
    return <Friend
      name={ele.name}
      age={ele.age}
      pets={ele.pets}
      key={ele.name}
    />


  })
  console.log(friendData)
  let petData = data.map(function (ele) {
    return ele.pets.map(function(pet) {
      return <Pet
      name={pet.name}
      breed={pet.breed}
      key={pet.name}
    />
    })

  })

  return (
    <div>
      {friendData}
      {petData}
    </div>
  )
}

export default App;
