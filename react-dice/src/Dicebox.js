import React from "react"

export default function Dicebox() {
    const [number, setNumber] = React.useState(0)

    function GetNum() {
        let randomNum = Math.floor(Math.random() * 6)
        setNumber(randomNum)
        return randomNum
    }

    return (
        <div>
            <button className="button" onClick={GetNum}>Roll Dice</button>
            <div className="number">{number}</div>
        </div>
    )
}
