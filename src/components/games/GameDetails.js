import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/api";
import GameGenres from "./GameGenres";
import GamePlatforms from "./GamePlatforms";

function GameDetails() {
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  const url = BASE_URL + "/" + id;

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setDetails(json))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, [url]);

  if (loading) {
    return (
      <Spinner
        animation="border"
        className="spinner"
        style={{ margin: "100px" }}
      />
    );
  }

  return (
    <Card style={{ width: "40rem", margin: "40px auto" }}>
      <Card.Img
        src={details.background_image}
        alt=""
        style={{ height: "auto", marginBottom: "15px" }}
      ></Card.Img>
      <Card.Title style={{ marginTop: "20px" }}>{details.name}</Card.Title>
      <Card.Text
        dangerouslySetInnerHTML={{ __html: details.description }}
        style={{ padding: "10px 20px" }}
      ></Card.Text>
      <Card.Text style={{ paddingBottom: "20px" }}>
        Learn more: <a href={details.website}>{details.website}</a>
      </Card.Text>
      <GameGenres genres={details.genres} />
      <GamePlatforms platforms={details.platforms} />
    </Card>
  );
}

export default GameDetails;
