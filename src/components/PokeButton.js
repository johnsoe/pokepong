
const PokeButton = (props) => {
  return (
    <div className="poke-button-container pure-u-1-3">
      <img className="poke-button-img" alt={props.pokemon.name} src={props.pokemon.img}/>
      <img className="poke-button-border" alt={props.pokemon.primary_type} src={props.pokemon.frame_url}/>
    </div>
  )
};

export default PokeButton;
