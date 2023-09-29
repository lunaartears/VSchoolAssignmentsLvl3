export default function Main(props) {
    return (
        <div className="cards">
            <div className="card">Destination: {props.place}</div>
            <div className="card">Price: {props.price}</div>
            <div className="card">Best time to go: {props.timeToGo}</div>
        </div>
    )
}
