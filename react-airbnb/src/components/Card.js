import React from "react"
import star from "../images/star.png"





export default function Card(props) {
    let badgeText
    if (props.openSpots == 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div> || props.location === "Online" && <div className="card--badge">ONLINE</div>}
            <img src={`../images/${props.coverImg}`} className="card--image" />
            <div className="card--stats">
            <img src={star} className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
