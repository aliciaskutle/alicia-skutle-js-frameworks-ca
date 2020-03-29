import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

function GamePlatforms(props) {
  return (
    <Card.Text>
      Platforms:
      {props.platforms.map(platform => (
        <Badge variant="info" style={{ margin: "5px", marginBottom: "50px" }}>
          {platform.platform.name}
        </Badge>
      ))}
    </Card.Text>
  );
}

export default GamePlatforms;
