import React from 'react';
import { Link } from 'react-router-dom';
import CharacterDetail from './CharactersDetail';
import '../styles/layouts/fiveItem.scss'
import '../styles/core/reset.scss'

function FiveItem ({character}){
  

    return (
    <>
    
    <article className='article'>
  
  <span className='span'> {character.alias} </span>
        {/* <img  className='img'
        src={character.image}  
         alt= {character.name}
         title= {character.name} /> */}
      
         
        
           




    </article>

    
    </>


    )
}

export default FiveItem;


