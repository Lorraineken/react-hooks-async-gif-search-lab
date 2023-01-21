import React, { useState } from "react";

function GifSearch({handleSubmit}){

    const[searchItem,setSearch] =useState()

    function handleChange(e){
      e.preventDefault()
      setSearch(e.target.value)
    }
    
   

    return(
        <form onSubmit={handleSubmit(searchItem)}>
          <input type="text" name="search" placeholder="Search" onChange={handleChange}/>
        </form>
    )
}

export default GifSearch