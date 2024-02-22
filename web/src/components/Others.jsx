import React from 'react';
import { Link } from 'react-router-dom';
import OthersItem from './OthersItem';
import '../styles/core/reset.scss';
import '../styles/layouts/allCharacters.scss'


function Others ({character}) {
 
    const renderOthers = 
    character
    // .filter(char =>  char.category === 'others')
    .map((character)=>{
        return(
          
            <li className='li'  key={character.id}>
                 <Link className='allLink' to={`/detail/${character.id}`} >
               <OthersItem
                character={character}  />
               </Link>
            </li>
            
        );
    });


return (
    <main className='allMain' >
        <h1 className='allTitle'>Others Characters</h1>
      
        <ul className='listAll'>{renderOthers}</ul>
        
        {/* <ul> {renderOthers} </ul> */}
       
        <Link to="/">
        <img className='rewind'  src="../../12.png" alt=""  
       />
      </Link>
    </main>
    
)
};

export default Others;