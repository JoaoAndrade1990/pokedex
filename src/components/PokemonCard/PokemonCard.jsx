import styles from "./PokemonCard.module.css";

const PokemonCard = () => {
const pokemon = "bulbasaur";

const printPokemon = (name) => {
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

return pokemonList.find((pokemon) => pokemon.name == name);

}
const selectedPokemon = printPokemon(pokemon);

  return (
    <div className={styles.card}>
      <figure>
      {selectedPokemon.imgSrc ? (
          <img className={styles.image} src={selectedPokemon.imgSrc} alt="" />
        ) : "???"}
        <figcaption>{selectedPokemon.name}</figcaption>
      </figure>
    </div>
  );
};



  export default PokemonCard;