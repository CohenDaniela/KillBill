import { useState } from 'react'
import { useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
import { matchPath } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { get, set, remove, clear } from '../services/LocalStorage.jsx';
import { useNavigate } from "react-router-dom";
import callToApi from '../services/api';
import Landing from './Landing'
import FiveList from './FiveList';
import AllCharacters from './AllCharacters.jsx';
import CharacterDetail from './CharactersDetail';
import "../styles/App.scss";
import FavoritesList from './Favoriteslist';



function App() {
  const [character, setCharacter] = useState([])
  const [favorites, setFavorites] = useState(get('favorites', []));
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultCharacter = await callToApi('http://localhost:3001/api/killbill');
        if (Array.isArray(resultCharacter)) {
          setCharacter(resultCharacter);
          console.log('character:', resultCharacter);
        } else {
          console.error('Error fetching data for character:', resultCharacter);
        }

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const { pathname } = useLocation();
  const routeData = matchPath('/detail/:id', pathname);

  const charId = routeData && routeData.params ? parseInt(routeData.params.id) : 0;



  const characterData = character.find((item) => item.id === charId);


  const toggleFavorite = (id) => {
    setFavorites((favorites) => {
      const updatedFavorites = favorites.includes(id)
        ? favorites.filter((favoriteId) => favoriteId !== id)
        : [...favorites, id];

      set('favorites', updatedFavorites);

      return updatedFavorites;
    });
  };
  const removeSingleFavorite = (event, id) => {
    event.preventDefault();
    setFavorites((favorites) => {
      const updatedFavorites = favorites.filter((favoriteId) => favoriteId !== id);

      set('favorites', updatedFavorites);

      return updatedFavorites;
    });
  };

  const resetFavorites = (id) => {
    setFavorites((favorites) => {
      const removeFavorites = favorites = ('')
      remove('favorites', removeFavorites);

      return removeFavorites;
    });
  };


  const handleRewindClick = () => {

    navigate(-1);
  };






  return (
    <>

      <Routes>
        <Route />
        <Route
          path='/'
          element={
            <Landing
              character={character}

            />

          }
        />
        <Route
          path='/api/fivelist'
          element={
            <FiveList
              character={character}

            />
          }

        />

        <Route
          path='api/otherslist'
          element={
            <AllCharacters
              character={character}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              resetFavorites={resetFavorites}


            />


          }


        />

        <Route
          path='/detail/:id'
          element={
            <>
              {console.log("characterData in App.js:", characterData)}
              {console.log("charId:", charId)}
              <CharacterDetail characterData={characterData}
                handleRewindClick={handleRewindClick} />
            </>
          }
        />


        <Route
          path='/favorites'
          element={
            <>

              <FavoritesList
                character={character}
                favorites={favorites}
                handleRewindClick={handleRewindClick}
                resetFavorites={resetFavorites}
                toggleFavorite={toggleFavorite}
                removeSingleFavorite={removeSingleFavorite}



              />
            </>
          }
        />

      </Routes>
    </>



  )
}

export default App
