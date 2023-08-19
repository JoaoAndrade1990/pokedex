import PokemonCard from "./components/PokemonCard/PokemonCard";

function App() {
    const container = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    };

  return (
    <div style={container}>
      <h2 style={{color: "blue", fontWeight: 800}}>Pokedex</h2>
      <PokemonCard/>
    </div>
  );
}

export default App;