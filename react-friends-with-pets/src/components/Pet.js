export default function Pet(props) {
    return (
        <div className="pets">
            <div>Pets: </div>
            <div>Name: {props.name}</div>
            <div>Breed: {props.breed}</div>
        </div>
    )
}
