import PropTypes from 'prop-types';

const NavBar = ({ pokemonList, updatePokemon}) => {
    return (
        <>
            {pokemonList.map((pokemon, index) => (
                <button key={index} onClick={() => updatePokemon(pokemon.name)}>
                    {pokemon.name}
                </button>
            ))}
        </>
    );
}

NavBar.propTypes = {
    pokemonList: PropTypes.array.isRequired,
};

export default NavBar;