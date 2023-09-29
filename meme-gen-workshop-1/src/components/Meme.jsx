import React from "react"
import { useEffect, useState } from 'react';
import data from "./data"

//1 Create function
function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = useState(data.data.memes)

    //Step 7 Create function to generate random meme
    function memePicker() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        setMeme(prevMeme => ({ //setMeme function sets meme to latest url
            ...prevMeme,
            randomImage: allMemes[randomNumber].url
        }))
    }


    //2 Create a return for showing output
    return (
        <div className='form-container'>
            {/* 3) Add 2 input boxes for text */}
            <input
                className="line-one"
                type="text"
                placeholder="top line"
                name='topText'

                value={meme.topText}
            onChange={(e) => setMeme(prevMeme => ({
                ...prevMeme,
                topText: e.target.value
            }))}

            >
            </input>

            {/* 3) Add 2 input boxes for text */}
            <input
                className="line-two"
                type="text"
                placeholder="bottom line"
                name='bottomText'

                value={meme.bottomText}
            onChange={(e) => setMeme(prevMeme => ({
                ...prevMeme,
                bottomText: e.target.value
            }))}


            ></input>

            {/* 4) Add a button to submit data */}
            <button className='click-button' onClick={memePicker}>
                Get a new meme image  🖼
            </button>

            {/* 8) Print results to screen */}
            <div className='meme'>
                {/* Put image, top, and bottom text here */}

                <div className='meme'>
                <img className="meme-image" src={meme.randomImage}></img>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>

            </div>
        </div>
    )
}

export default Meme
