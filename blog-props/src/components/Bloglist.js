import React from "react"

export default function Bloglist(props) {
    return (
        <div className="blogs">

            <a className="title">{props.title}</a>
            <a className="subtitle">{props.subTitle}</a>
            <p>Posted by <a className="author">{props.author}</a>{props.date}</p>

        </div>
    )
}
