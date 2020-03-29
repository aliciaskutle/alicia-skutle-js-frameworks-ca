import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

function GameGenres(props) {
  return (
    <Card.Text>
      Genres:
      {props.genres.map(genre => (
        <Badge variant="info" style={{ margin: "5px" }}>
          {genre.name}
        </Badge>
      ))}
    </Card.Text>
  );
}

export default GameGenres;
