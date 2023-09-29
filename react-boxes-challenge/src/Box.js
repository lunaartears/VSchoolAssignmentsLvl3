import React from "react"

export default function Box(props) {

    let styles = {
        backgroundColor: props.on ? "white": "black"
    }



    return (
        <div
        style={styles}
        className="box"
        onClick={()=>props.handleClick(props.id)}
        >
        </div>
    )

}
