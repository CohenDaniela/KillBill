import React from 'react';
import { Link } from 'react-router-dom';

function OthersItem ({character}){

    return (
    <>
    <article className='article'>

        <h1> {character.name} </h1>
        <img  className='img'
        src={character.image}  
         alt= {character.name}
         title= {character.name} />


    </article>
    
    </>


    )
}

export default OthersItem;