import { useParams } from 'react-router-dom'

import PokeMove from './PokeMove'

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
          <div className="poke-profile-body">
            <PokeMove
              attackName={pokemon.passive}
              attackType={pokemon.passive_type}
              attackPP={-1}
              attackText={pokemon.passive_text}/>
            <PokeMove
              attackName={pokemon.basic_attack}
              attackType={pokemon.basic_attack_type}
              attackPP={0}
              attackText={pokemon.basic_attack_text}/>
            <PokeMove
              attackName={pokemon.special_attack}
              attackType={pokemon.special_attack_type}
              attackPP={pokemon.special_attack_pp}
              attackText={pokemon.special_attack_text}/>
          </div>
        </div>
      }
    </div>
  )
};

export default PokeProfile;
