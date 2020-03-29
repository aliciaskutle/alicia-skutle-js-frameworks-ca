import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { emojify } from "react-emojione";

function GameItem(props) {
  const gameInfo = {
    id: props.id,
    name: props.name,
    image: props.background_image,
    rating: props.rating,
    released: props.released
  };

  const handleClick = () => {
    localStorage.setItem("gameInfo", JSON.stringify(gameInfo));
  };

  return (
    <Card style={{ width: "13rem", margin: "40px auto" }}>
      <Card.Img variant="top" src={props.background_image} alt="" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>Rating: {props.rating}</Card.Text>
        <Card.Text>Released: {props.released}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Link to={"/game/" + props.id}>View</Link>
        <Button variant="light" onClick={handleClick}>
          {emojify(":black_heart:")}
        </Button>
      </Card.Footer>
    </Card>
  );
}

GameItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  background_image: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  released: PropTypes.string.isRequired
};

export default GameItem;

/* 
<button onClick={() => onFavoriteClick(data)}>
{isAdded ? emojify(":heart:") : emojify(":black_heart:")} 
</button> 
*/
