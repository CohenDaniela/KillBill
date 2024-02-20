import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/core/reset.scss'
import '../styles/layouts/allItem.scss'

function OthersItem ({character}){

    return (
    <>
    <article className='articleAll'>

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