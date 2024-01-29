import { useState } from 'react'
import { useEffect } from 'react'
import { Link, Route, Routes } from "react-router-dom";

import objectApi from '../services/api'
import Landing from './Landing'
import FiveList from './FiveList';



function App() {
  const [character, setCharacter] = useState([])
  const [otheRChar, setOtherChar] = useState([])


  useEffect(() => {
    objectApi.getA()
      .then(result => {
        if (Array.isArray(result)) {
          setCharacter(result);
          console.log('character:', result);
        } else {
          console.error('getA error', result);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    objectApi.getC()
      .then(result => {
        if (Array.isArray(result)) {
          setOtherChar(result);
          console.log('other:', result);
        } else {
          console.error('getC error', result);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <>
    <Routes>
    <Route
    path='/'
    element= {
      <>

      <Landing>

      </Landing>
      
      </>
    }
    
    
    />

    <Route

    path='/api/listFive'

    element= {
      <>
      <FiveList></FiveList>
      
      </>
    }
    
    />

    </Routes>
     
      
     
    </>
  )
}

export default App
