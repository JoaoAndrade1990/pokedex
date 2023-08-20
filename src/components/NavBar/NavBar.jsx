import PropTypes from 'prop-types';

const NavBar = ({ pokemonList }) => {
    return (
        <>
            {pokemonList.map((pokemon, index) => (
                <button key={index}>
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