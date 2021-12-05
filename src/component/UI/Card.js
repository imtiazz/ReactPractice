import "./Card.css";

function Card(props) {
  const classes = " css " + props.className;
  return <div className={classes}>{props.children}</div>;
}

//Props.children is default - dont need to pass it. Its set defaul to children element inside card.
export default Card;
