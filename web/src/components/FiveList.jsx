import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { get, set, remove, clear } from '../services/LocalStorage.jsx';
import FiveItem from './FiveItem';
import '../styles/layouts/fiveList.scss';
import '../images/9.png'
import '../images/10.png'
import '../images/12.png'
import '../styles/core/reset.scss';


function FiveList({ character }) {

  const [crossedOutItems, setCrossedOutItems] = useState(() => {
    return get('crossedOutItems', []);
  });


  const handleClick = (index) => {
    setCrossedOutItems((prevCrossedOutItems) => {
      const newCrossedOutItems = [...prevCrossedOutItems];
      const currentIndex = newCrossedOutItems.indexOf(index);

      if (currentIndex === -1) {
        newCrossedOutItems.push(index);
      } else {
        newCrossedOutItems.splice(currentIndex, 1);
      }
      set('crossedOutItems', newCrossedOutItems);

      return newCrossedOutItems;
    });
  };
  const handleReset = () => {
    setCrossedOutItems([]);
    remove('crossedOutItems');
  };


  return (
    <main className='mainList'>
      <h1 className='lisTitle' >Death List Five</h1>
      <ul className='ul'>
        {character
          .filter((char) => char.category === 'five list')
          .map((character, index) => (
            <li className='li' key={character.id}>
              <h1
                onClick={() => handleClick(index)}
                className={`name ${crossedOutItems.includes(index) ? 'crossout' : ''}`}


              >
                {character.name}
              </h1>
              <Link className='link' to={`/detail/${character.id}`}>
                <FiveItem character={character} />
              </Link>

            </li>
          ))}

      </ul>
      <div className='divLinks'>
        <img className='reset' src="../9.png" alt=""
          onClick={handleReset}
        />

        <Link to="/">

          <img className='rewind' src="../../12.png" alt=""
          />
        </Link>

      </div>
    </main>
  );
}

export default FiveList;



