import React from "react"

function Card(props) {
    const { meme, index, editMeme, deleteMeme, getMemeImage } = props

    const [toggleEdit, setToggleEdit] = React.useState(false)
    const [cardData, setCardData] = React.useState(meme)

    function handleChange(event) {
        const { name, value } = event.target
        setCardData(prevText => ({
            ...prevText,
            [name]: value
        }))
    }

    return (
        <>
            {toggleEdit ?
                <div>
                    <div className="card-meme">
                        <p>editing on</p>
                        <h1 className="card-text card-top">{cardData.topText}</h1>
                        <h1 className="card-text card-bottom">{cardData.bottomText}</h1>
                        <img className="card-image" src={cardData.randomImage} />
                        <button className="del-button" onClick={() => deleteMeme(index)}>Delete Meme</button>
                        <button className="edit-button" onClick={() => setToggleEdit(!toggleEdit)}>Edit Meme</button>
                    </div>
                    <div className="form">
                        <input
                            className="input1"
                            type="text"
                            placeholder="Top Text"
                            name="topText"
                            value={cardData.topText}
                            onChange={handleChange}
                        ></input>

                        <input
                            className="input2"
                            type="text"
                            placeholder="Bottom Text"
                            name="bottomText"
                            value={cardData.bottomText}
                            onChange={handleChange}
                        ></input>

                    </div>
                </div>
                :
                <div className="card-meme">
                        <p>editing off</p>
                        <h1 className="card-text card-top">{cardData.topText}</h1>
                        <h1 className="card-text card-bottom">{cardData.bottomText}</h1>
                        <img className="card-image" src={cardData.randomImage} />
                        <button className="del-button" onClick={() => deleteMeme(index)}>Delete Meme</button>
                        <button className="edit-button" onClick={() => setToggleEdit(!toggleEdit)}>Edit Meme</button>
                    </div>

            }
        </>

    )
}



export default Card
