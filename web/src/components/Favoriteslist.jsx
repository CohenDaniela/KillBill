import React from 'react';
import { Link } from 'react-router-dom';
import OthersItem from './OthersItem.jsx';
import '../styles/layouts/favoritesList.scss'
import '../styles/core/reset.scss'
import { get, set, remove, clear } from '../services/LocalStorage.jsx';

function FavoritesList({ favorites, character, handleRewindClick, resetFavorites, removeSingleFavorite }) {
  

  const renderFavorites = character
    .filter((character) => favorites.includes(character.id))
    .map((character) => (
      <li className='liFavorites' key={character.id}>

        <Link className='linkFavorites' to={`/detail/${character.id}`} >
          <OthersItem
            character={character} />
        </Link>
        <button
        
  className='resetButton'
  onClick={(event) => removeSingleFavorite(event, character.id)}  
><span role="img" aria-label="delete" className="deleteIcon">&#10060;</span>
 
</button>

      </li>
    ));

  return (
    <main className='mainFavorites'>
      <h2 className='favoritesTitle'>Favorites</h2>
      <section className='favoritesSection'>



        <ul className='ulFav'>{renderFavorites}

        </ul>


        <div className='divLinks'>
          <img className='reset' src="../9.png" alt=""
            onClick={resetFavorites}
          />
          <img className='rewind' src="../12.png" alt=""
            onClick={handleRewindClick}
          />

        </div>

      </section>
    </main>


  );
}

export default FavoritesList;