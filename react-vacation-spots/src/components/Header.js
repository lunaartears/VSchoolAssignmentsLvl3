import headerImg from "../images/image.jpeg"

export default function Header() {
    return (
        <div>
            <nav className="header">
                <div className="navs">
                    <span className="nav-links">About</span>
                    <span className="nav-links">Reviews</span>
                    <span className="nav-links">Photos</span>
                    <span className="nav-links">How to Use this Site</span>
                </div>

                <div className="out-there">See What's Out There!</div>
                <img src={headerImg} className="header-img"/>
                <div className="choose">Choose your Destination!</div>
            </nav>
        </div>
    )
}
