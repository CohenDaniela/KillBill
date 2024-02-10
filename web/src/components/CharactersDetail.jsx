
import React from "react";
import { Link } from "react-router-dom";
import '../styles/layouts/characterDetail.scss'
import '../styles/core/reset.scss'

const CharacterDetail = ({ characterData }) => {
  if (!characterData) {
    // Puedes manejar el caso en que characterData sea undefined aquí
    return <p>Cargando...</p>
  }
  return (
    <>
      <section className="sectionDetail">
        <article className="articleDetail">
          <h1> {characterData.name} </h1>
          <h5>  {characterData.alias} </h5>
          <img
            className='img'
            src={characterData.image}
            alt={characterData.name}
            title={characterData.name}
          />

          <h3> {characterData.occupation} </h3>
          <h3> Weapons: {characterData.weapons} </h3>
          <h4> Age: {characterData.age} </h4>
          <h5> Place of Birth : {characterData.country} </h5>

        
          <p></p>
        </article>

        <Link to="/">
        <img className='rewind'  src="../../public/12.png" alt=""  
       />
      </Link>
      </section>
    </>
  );
};

export default CharacterDetail;

