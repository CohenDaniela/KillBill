import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FiveItem from './FiveItem';
import '../styles/layouts/fiveList.scss';
import '../../public/9.png'
import '../../public/10.png'
import '../styles/core/reset.scss';
import "../../public/cuadernoT.png"
import Landing from './Landing'

function FiveList({ character }) {
  const [crossedOutItems, setCrossedOutItems] = useState([]);

  const handleClick = (index) => {
    setCrossedOutItems((prevCrossedOutItems) => {
      const newCrossedOutItems = [...prevCrossedOutItems];
      const currentIndex = newCrossedOutItems.indexOf(index);

      if (currentIndex === -1) {
        newCrossedOutItems.push(index);
      } else {
        newCrossedOutItems.splice(currentIndex, 1);
      }

      return newCrossedOutItems;
    });
  };
  const handleReset = () => {
    // Restablecer el estado crossedOutItems a un array vacío
    setCrossedOutItems([]);
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
      
      
    <div>
    <img className='reset'  src="../../public/9.png" alt=""  
       onClick={handleReset}
       />
        <Link to="/">
        <img className='rewind'  src="../../public/12.png" alt=""  
       />
      </Link>
    </div>
       
       
     
      
    </main>
  );
}

export default FiveList;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import FiveItem from './FiveItem';
// import CharacterDetail from './CharactersDetail';
// import '../styles/layouts/fiveList.scss';
// import '../images/4.png';
// import '../styles/core/reset.scss';

// function FiveList({ character }) {
//   const [crossedOutItems, setCrossedOutItems] = useState([]);

//   const handleClick = (index) => {
//     // Copiar el array actual de crossedOutItems
//     const newCrossedOutItems = [...crossedOutItems];

//     // Verificar si el ítem en el índice ya está tachado
//     if (newCrossedOutItems.includes(index)) {
//       // Si está tachado, quitar la clase (desmarcar)
//       const indexToRemove = newCrossedOutItems.indexOf(index);
//       newCrossedOutItems.splice(indexToRemove, 1);
//     } else {
//       // Si no está tachado, agregar la clase (marcar)
//       newCrossedOutItems.push(index);
//     }

//     // Actualizar el estado con el nuevo array
//     setCrossedOutItems(newCrossedOutItems);
//   };

//   const renderFive = character
//     .filter((char) => char.category === 'five list')
//     .map((character, index) => {
//       return (
//         <li className='li' key={character.id}>
//           <h1
//             onClick={() => handleClick(index)}
//             className={`name ${crossedOutItems.includes(index) ? 'crossout' : ''}`}
//           >
//             {character.name}
//           </h1>
//           <Link className='link' to={`/detail/${character.id}`}>
//             <FiveItem character={character} />
//           </Link>
//         </li>
//       );
//     });

//   console.log(character);

//   return (
//     <main className='mainList'>
//       <h1>Five List</h1>
//       <ul className='ul'>{renderFive}</ul>
//     </main>
//   );
// }

// export default FiveList;
