
import React from "react";
import { Link } from "react-router-dom";
import '../styles/layouts/characterDetail.scss'
import '../styles/core/reset.scss'



const CharacterDetail = ({ characterData }) => {
  if (!characterData) {
  
    return <p>Cargando...</p>
    
  }
  let linkTo = "/"; 
  if (characterData.category === "five list") {
    linkTo = "/api/fivelist";
  } else if (characterData.category === "others") {
    linkTo = "/api/otherslist";
  } 
  
  return (
    <>
      <section className="sectionDetail">
        <article className="articleDetail">
          <h1 className="artName "> {characterData.name} </h1>
          <h2 className="articledata alias" >  {characterData.alias} </h2>
          <img
            className="imgCharacter"
            src={characterData.image}
            alt={characterData.name}
            title={characterData.name}
          />
         <section className="infoCharacter">
         <span className="infoTxt"> Ocupattion</span>
          <h3 className="articledata ocupattion" > {characterData.occupation} </h3>
         <span className="infoTxt"> Weapons</span>
          <h3 className="articledata weapons" >  {characterData.weapons} </h3>
          <span className="infoTxt">Affiliation</span>
          <h3 className="articledata affiliation" > {characterData.affiliation} </h3>
        <span className="infoTxt">  Age </span>
          <h4 className="articledata age" >{characterData.age} </h4>
         <span className="infoTxt"> Place of Birth  </span>
          <h4 className="articledata country" > {characterData.country} </h4>

        
         </section>
        </article>
        
        <Link to={linkTo} >
        <img className='rewind'  src="../../public/12.png" alt=""  
       />
      </Link>
      </section>
    </>
  );
};

export default CharacterDetail;

