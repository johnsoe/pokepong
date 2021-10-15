import { Link } from 'react-router-dom';

const PokeButton = (props) => {
  return (
    <Link to={"/profile/" + props.pokemon.name} className="pure-u-1-3">
      <div className="poke-button-container">
        <img className="poke-button-img" alt={props.pokemon.name} src={props.pokemon.buttonImgUrl}/>
        <img className="poke-button-border" alt={props.pokemon.primary_type} src={props.pokemon.frameUrl}/>
      </div>
    </Link>
  )
};

export default PokeButton;
