import React from 'react';
import { Link } from 'react-router-dom';
import OthersItem from './OthersItem.jsx';
import { get, set, remove, clear } from '../services/LocalStorage.jsx';

function FavoritesList({ favorites, character }) {
  const renderFavorites = character
    .filter((character) => favorites.includes(character.id))
    .map((character) => (
      <li key={character.id}>
          <Link className='allLink' to={`/detail/${character.id}`} >
               <OthersItem
                character={character}  />
               </Link>


      </li>
    ));

  return (
    <div>
      <h2>Favorites</h2>
      <ul>{renderFavorites}</ul>
    </div>
  );
}

export default FavoritesList;