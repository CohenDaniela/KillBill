import React from 'react';
import { Link } from 'react-router-dom';
import FiveItem from './FiveItem';
import CharacterDetail from './CharactersDetail';


function FiveList ({character}) {
    const renderFive = 
    character.filter(char =>  char.category === 'five list')
    .map((character)=>{
        return(
          
            <li className='li'  key={character.id}>
                 <Link to={`/detail/${character.id}`}>
            <FiveItem character={character}
           
             />
          </Link>
            </li>
            
        );
    });
console.log (character);

return (
    <main>
        <h1>Five List</h1>
        <ul className='list'></ul>

        <ul> {renderFive} </ul>
    </main>
    
)
};

export default FiveList;