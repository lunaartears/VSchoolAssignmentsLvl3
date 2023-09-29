
import React from "react"
import axios from "axios"
import Card from "./Card"

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(function () {
        axios.get("https://api.imgflip.com/get_memes")
            //.then(res => res.data)
            .then(data => setAllMemeImages(data.data.data.memes)) //data.data.memes  ????

    }, [])
console.log(allMemeImages)
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme, randomImage: url
        }))

    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevText => ({
            ...prevText,
            [name]: value
        }))
    }

    const [memeList, setMemeList] = React.useState([])

    function addMemeToList() {
        setMemeList(mappedMemes => ([
            ...mappedMemes,
            meme

        ]))
    }

    function deleteMeme(i) {
        setMemeList(prevMemes => prevMemes.filter((meme, index) => index !== i))
    }
    function editMeme(i) {
        setMemeList(prevMemes => prevMemes.map((meme, index) => {
            if (index === i) {
                //console.log(meme)
                meme.topText = ""
                meme.bottomText = ""
            }
        }))
    }

    const memeMap = memeList.map((meme, index) => {
        return (
            <Card
                meme={meme}
                index={index}
                editMeme={editMeme}
                deleteMeme={deleteMeme}
                handleChange={handleChange}
                getMemeImage={getMemeImage}
            />
        )
    })

    return (
        <main>
            <div className="form">
                <input
                    className="input1"
                    type="text"
                    placeholder="Top Text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                ></input>

                <input
                    className="input2"
                    type="text"
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                ></input>

                <button
                    className="button"
                    onClick={getMemeImage}>Get a new meme image
                </button>
            </div>
            <div className="meme">
                <img className="meme-image" src={meme.randomImage} />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
                <button className="save-button" onClick={addMemeToList}>Save Meme</button>
            </div>
            <div>
                {memeMap}
            </div>

        </main>
    )
}
