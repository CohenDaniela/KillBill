import React from 'react';
import { get, set, remove, clear } from '../services/LocalStorage.jsx';

function FavoritesList({ favorites, character }) {
  const renderFavorites = character
    .filter((character) => favorites.includes(character.id))
    .map((character) => (
      <li key={character.id}>
        <p>{character.name}</p>
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