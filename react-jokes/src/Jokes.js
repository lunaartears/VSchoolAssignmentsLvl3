import React from "react"


export default function Jokes(props) {

    const [isShown, setIsShown] = React.useState(false)
    function Toggle() {
        setIsShown(prev => !prev)
    }


    return (
        <div className="singleJoke">
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={Toggle}>{isShown ? "Hide": "Show"} Punchline</button>
        </div>
    )
}
