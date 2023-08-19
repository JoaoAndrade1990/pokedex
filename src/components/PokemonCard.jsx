import React from "react";
import PropTypes from "prop-types"
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

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;