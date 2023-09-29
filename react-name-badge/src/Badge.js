import React from "react"


function Badge(props) {
    console.log(props)
    return (
        <div className="badge">
            <h3>Badge:</h3>
            <div className="badge-container">
                <p>Name: {props.firstName} {props.lastName}</p>
                <p>Email: {props.email}</p>
                <p>Place of birth: {props.placeOfBirth}</p>
                <p>Phone: {props.phone}</p>
                <p>Favorite Food: {props.favFood}</p>
            </div>
            <p className="text-area">{props.textarea}</p>
        </div>
    )



}

export default Badge
