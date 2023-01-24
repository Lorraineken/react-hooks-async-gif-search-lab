import React from "react";

function GifList({gifs}){

  const gifsList = gifs.map((gif,index) => 

    <li key={index}><img src={gif} alt={gif}/></li>
  )
  
    return(
        <ul>
       {gifsList}

        </ul>

    )
}

export default GifList