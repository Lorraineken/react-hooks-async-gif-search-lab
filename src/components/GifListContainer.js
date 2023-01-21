import React,{useEffect, useState} from "react";
import GifList from "./GifList";


function GifListContainer(){

    const[gifs,setGifs] = useState([])


    useEffect(() =>{

        const URL =`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=fKqpaSdooOWnsRPd62UmYkqStDXJu0W9&rating=g`

        fetch(URL)
        .then((response) => response.json())
        .then((gif) =>{
            const showGifs = [gif.data[0].url,gif.data[1].url,gif.data[2].url]
            setGifs(showGifs)
        })
    },[])

    return(

        <div>
         <GifList />
        </div>
    )
}

export default GifListContainer