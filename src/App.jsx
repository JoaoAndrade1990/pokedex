import PokemonCard from "./components/PokemonCard/PokemonCard";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";

function App() {
    const [pokemonIndex, setPokemonIndex] = useState(0);

    const updatePokemon = (pokemon) => {
        const index = pokemonList.findIndex((element) => element.name == pokemon);
        setPokemonIndex(index);
    }
    
    console.log(pokemonIndex)

    const container = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    };
    
    const pokemonList = [
      {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

    const selectedPokemon = pokemonList[pokemonIndex];

  return (
    <div style={container}>
      <h2 style={{color: "blue", fontWeight: 800}}>Pokedex</h2>
      <NavBar pokemonList={pokemonList} updatePokemon={updatePokemon}/>
      <PokemonCard pokemon={selectedPokemon}/>
      
    </div>
  );
}

export default App;
