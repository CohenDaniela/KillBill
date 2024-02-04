import React from 'react';
import { Link } from 'react-router-dom';
import OthersItem from './OthersItem';


function Others ({character}) {
    const renderOthers = 
    character.filter(char =>  char.category === 'others')
    .map((character)=>{
        return(
          
            <li className='li'  key={character.id}>
                 <Link to={`/detail/${character.id}`} >
               <OthersItem
                character={character}  />
               </Link>
            </li>
            
        );
    });


return (
    <main>
        <h1>Others Characters</h1>
        <ul className='list'></ul>
        
        <ul> {renderOthers} </ul>
    </main>
    
)
};

export default Others;