import troll from "../images/troll-face.png"

export default function Header() {
    return (
        <div className="header">
            <img className="trollImg" src={troll}/>
            <h2 className="header-text">Meme Generator</h2>
            <h2 className="project-text">React Course - Project 3</h2>
        </div>
    )
}
