import React from "react"

const [color, setColor] = React.useState("pink")
setColor(color = "blue")

setColor(prevColor => (
  prevColor === "pink" ? color = "blue" : color = "pink"
))


const [people, setPeople] = React.useState([
  {
    firstName: "John",
    lastName: "Smith"
  }
])

const newPerson = {
  firstName: "Peter",
  lastName: "Blue"
}
setPeople(prevPerson => ({
  ...prevPerson, newPerson
}))

const [colors, setColors] = setState(["pink", "blue"])

setColors(prevColors => [...prevColors, "green"])

const [countObject, setCountObject] = setState({
  count: 0
})

setCountObject(prevState => { count: prevState.count + 1 })

const [person, setPerson] = useState({
  firstName: "John",
  lastName: "Smith"
})

setPerson(prevState => ({
  ...prevState,
  age: 30
}))

const [colors, setColors] = setState(["pink", "blue"])

setColors(prevColors => [...prevColors, "green"])

const [countObject, setCountObject] = setState({
  count: 0
})

setCountObject(prevState => ({ count: prevState.count + 1 }))

const [colors, setColors] = useState(["pink", "blue"])

setColors(prevArr => [...prevArr, "green"])
