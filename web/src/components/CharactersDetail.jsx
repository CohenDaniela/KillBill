
import React from "react";
import { Link } from "react-router-dom";

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
          <h2> Alias: {characterData.alias} </h2>
          <h3> Occupation: {characterData.occupation} </h3>
          <h3> Weapons: {characterData.weapons} </h3>
          <h4> Age: {characterData.age} </h4>
          <h5> Place of Birth : {characterData.country} </h5>

          <img
            className='img'
            src={characterData.image}
            alt={characterData.name}
            title={characterData.name}
          />

          <p></p>
        </article>

        <Link className="back" to="/">
          Volver al inicio
        </Link>
      </section>
    </>
  );
};

export default CharacterDetail;

