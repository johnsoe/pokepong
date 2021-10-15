import { useParams } from 'react-router-dom'

const PokeProfile = (props) => {
  const { pokemonName } = useParams();
  const filteredData = props.pokeData && props.pokeData.filter(item => item.name === pokemonName)

  var pokemon = null;
  if (filteredData && filteredData[0]) {
    pokemon = filteredData[0]
  }

  return (
    <div className="poke-profile-container">
      { pokemon &&
        <div className="poke-profile">
          <div className={"poke-profile-header type-" + pokemon.primary_type.toLowerCase() }>
            <img className="poke-profile-img" alt={pokemon.name} src={pokemon.profileImgUrl}/>
          </div>
        </div>
      }
    </div>
  )
};

export default PokeProfile;
