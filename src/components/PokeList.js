import PokeButton from './PokeButton'

const PokeList = (props) => {

  return (
    <div className="pokelist pure-g">
    { props.pokeData &&
      props.pokeData.map(pokemon =>
        <PokeButton pokemon={pokemon}/>
      )
    }
    </div>
  )
};

export default PokeList;
