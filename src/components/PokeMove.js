
const PokeMove = (props) => {

  function getPPText(pp) {
    if (pp == -1) {
      return "Passive";
    } else if (pp == 0) {
      return "PP ∞";
    } else {
      return "PP " + pp + "/" + pp;
    }
  }

  return (
    <div className="move-container">
      <div className="move-header">
        <span className={"move-name type-" + props.attackType.toLowerCase()}>{props.attackName}</span>
        <span className={"move-pp type-" + props.attackType.toLowerCase()}>{getPPText(props.attackPP)}</span>
      </div>
      <p className="move-text">{props.attackText}</p>
    </div>
  )
}

export default PokeMove;
