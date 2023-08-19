import PokemonCard from "./components/PokemonCard/PokemonCard";

function App() {
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
        name: "mew",
      },
    ];

    const selectedPokemon = pokemonList[0];

  return (
    <div style={container}>
      <h2 style={{color: "blue", fontWeight: 800}}>Pokedex</h2>
      <PokemonCard pokemon={selectedPokemon}/>
      
    </div>
  );
}

export default App;
