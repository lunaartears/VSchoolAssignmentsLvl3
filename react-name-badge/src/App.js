import React, { useEffect } from "react"
import './App.css';
import Badge from "./Badge";


function App() {
  const initState = {
    firstName: "",
    lastName: "",
    email: "",
    placeOfBirth: "",
    phone: "",
    favFood: "",
    textarea: ""
  }
  const [badgesArr, setBadgesArr] = React.useState([])
  const [formData, setFormData] = React.useState(initState)


  const handleChange = (event) => {//
    const { name, value } = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
    return name
  }


  function onSubmit(event) {
    event.preventDefault()
    setBadgesArr(prevBadges => {
      return [...prevBadges, formData]
    })
    setFormData(initState)
  }

  const mappedBadges = badgesArr.map((badge) => {
    return (
      <Badge
        //key={i}
        firstName={badge.firstName}
        lastName={badge.lastName}
        email={badge.email}
        placeOfBirth={badge.placeOfBirth}
        phone={badge.phone}
        favFood={badge.favFood}
        textarea={badge.textarea}
      />
    )
  })

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="container1">
        <input
          type="text"
          placeholder="First name"
          name="firstName"
          className="cont1-item"
          onChange={handleChange}
          value={formData.firstName}
        />
        <input
          type="text"
          placeholder="Last name"
          name="lastName"
          className="cont1-item"
          onChange={handleChange}
          value={formData.lastName}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="cont1-item"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="text"
          placeholder="Place of birth"
          name="placeOfBirth"
          className="cont1-item"
          onChange={handleChange}
          value={formData.placeOfBirth}
        />
        <input
          type="tel"
          placeholder="Phone"
          name="phone"
          className="cont1-item"
          onChange={handleChange}
          value={formData.phone}
        />
        <input
          type="text"
          placeholder="Favorite food"
          name="favFood"
          className="cont1-item"
          onChange={handleChange}
          value={formData.favFood}
        />
        </div>

        <div className="container2">
          <textarea
            placeholder="Tell us about yourself"
            name="textarea"
            id="textarea"
            className="cont2-item"
            onChange={handleChange}
            value={formData.textarea}
          >
          </textarea>
          <button className="cont2-item" type="submit">Submit</button>
        </div>
      </form>
      <div>
        {mappedBadges}
      </div>

    </div>
  )
}

export default App;
