import React from "react";
import styles from "./PokemonCard.module.css";

const PokemonCard = ({ pokemon }) => {

  return (
    <div className={styles.card}>
      <figure>
        {pokemon.imgSrc ? (
          <img className={styles.image} src={pokemon.imgSrc} alt="" />
        ) : "???"}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </div>
  );
};

export default PokemonCard;