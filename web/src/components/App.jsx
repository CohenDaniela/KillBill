import { useState } from 'react'
import { useEffect } from 'react'
import { Link, Route, Routes } from "react-router-dom";
import { matchPath } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import callToApi from '../services/api';
import Landing from './Landing'
import FiveList from './FiveList';
import Others from './Others';
import CharacterDetail from './CharactersDetail';
import "../styles/App.scss";






function App() {
  const [character, setCharacter] = useState([])
  const [fiveCharacters, setFiveCharacters]= useState ([])
  const [otheRChar, setOtherChar] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Llamada al primer endpoint
        const resultCharacter = await callToApi('http://localhost:3001/api/killbill');
        if (Array.isArray(resultCharacter)) {
          setCharacter(resultCharacter);
          console.log('character:', resultCharacter);
        } else {
          console.error('Error fetching data for character:', resultCharacter);
        }

        // Llamada al segundo endpoint
        // const resultIdCharacters = await callToApi('http://localhost:3001/api/:id');
        // if (Array.isArray(resultIdCharacters)) {
        //   setFiveCharacters(resultIdCharacters);
        //   console.log('fiveCharacters:', resultiDCharacters);
        // } else {
        //   console.error('Error fetching data for fiveCharacters:', resultidCharacters);
        // }

        // Llamada al tercer endpoint
       

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Llamamos a la función fetchData que contiene las llamadas a la API

    // Dependencia vacía para que el useEffect se ejecute solo una vez al montar el componente
  }, []);
  
  const { pathname } = useLocation();
  const routeData = matchPath('/detail/:id', pathname);
  
  const charId = routeData && routeData.params ? parseInt(routeData.params.id) : 0;

  
  // ///buscar personaje por id
  const characterData = character.find((item) => item.id === charId);
 
   


  return (
    <>
        
    <Routes>
      <Route
      path='/'
      element= {
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
      element= {
        <Others
        character= {character}
        
        />
        
        
      }
      
      
      />

<Route
  path='/detail/:id'
  element={
    <>
     {console.log("characterData in App.js:", characterData)}
     {console.log("charId:", charId)}
      <CharacterDetail characterData={characterData} />
    </>
  }
/>

    </Routes>
    </>
    

    
  )
}

export default App
