import React from "react";
import { Link } from "react-router-dom";
import AllItems from "./AllItems.jsx";
import "../styles/core/reset.scss";
import "../styles/layouts/allCharacters.scss";

function AllCharacters({
  character,
  favorites,
  toggleFavorite,
  resetFavorites,
}) {
  const renderOthers = character.map((character) => {
    return (
      <li className="li" key={character.id}>
        <Link className="allLink" to={`/detail/${character.id}`}>
          <AllItems character={character} />
        </Link>
        <button
          className={`btnToggleFav ${
            favorites.includes(character.id) ? "inFavorites" : "notInFavorites"
          }`}
          onClick={() => toggleFavorite(character.id)}
          onTouchStart={() => toggleFavorite(character.id)}
        >
          {favorites.includes(character.id) ? (
            <>
              <span role="img" aria-label="heart" className="heartIcon">
                &#10084;
              </span>
            </>
          ) : (
            <>
              <span role="img" aria-label="heart" className="heartIcon">
                &#10084;
              </span>
            </>
          )}
        </button>
      </li>
    );
  });

  return (
    <main className="allMain">
      <h1 className="allTitle"> All the Characters</h1>

      <ul className="listAll">{renderOthers}</ul>

      <div className="divBtns">
        <img className="reset" src="../9.png" alt="" onClick={resetFavorites} />

        <Link className="linktofav" to={"/favorites"}>
          favorites
        </Link>

        <Link to="/">
          <img className="rewind" src="../../12.png" alt="" />
        </Link>
      </div>
    </main>
  );
}

export default AllCharacters;
