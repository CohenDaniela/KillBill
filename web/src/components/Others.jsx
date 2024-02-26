import React from 'react';
import { Link } from 'react-router-dom';
import { get, set, remove, clear } from '../services/LocalStorage.jsx';
import OthersItem from './OthersItem';
import FavoritesList from './Favoriteslist';
import '../styles/core/reset.scss';
import '../styles/layouts/allCharacters.scss'


function Others ({character, favorites, toggleFavorite}) {

    
    
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
               <button onClick={() => toggleFavorite(character.id)}>
        {favorites.includes(character.id) ? 'Quitar de favoritos' : 'Marcar como Favorito'}
      </button>
            </li>
            
        );
    });


return (
    <main className='allMain' >
        <h1 className='allTitle'> All the Characters</h1>
      
        <ul className='listAll'>{renderOthers}</ul>
        
 <Link to={'/favorites'}
 
 >

  favorites
 </Link>
       
        <Link to="/">
        <img className='rewind'  src="../../12.png" alt=""  
       />
      </Link>
 
    </main>
    
)
};

export default Others;