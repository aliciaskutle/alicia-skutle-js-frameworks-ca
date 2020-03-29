import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { BASE_URL } from "../../constants/api";
import GameItem from "./GameItem";
import Search from "./Search";

function GameList() {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(json => {
        setGames(json.results);
        setFilteredGames(json.results);
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const filterGames = function(e) {
    const searchValue = e.target.value.toLowerCase();

    const filteredArray = games.filter(function(char) {
      const lowerCaseName = char.name.toLowerCase();

      if (lowerCaseName.startsWith(searchValue)) {
        return true;
      }
      return false;
    });

    setFilteredGames(filteredArray);
  };

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
    <div>
      <Search handleSearch={filterGames} />
      <ul
        style={{
          display: "grid",
          gridTemplate: "repeat(7, 25rem) / repeat(3, 25rem) ",
          justifyContent: "center"
        }}
      >
        {filteredGames.map(game => {
          const { id, name, background_image, rating, released } = game;

          return (
            <li key={id} style={{ listStyleType: "none" }}>
              <GameItem
                id={id}
                name={name}
                background_image={background_image}
                rating={rating}
                released={released}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default GameList;
