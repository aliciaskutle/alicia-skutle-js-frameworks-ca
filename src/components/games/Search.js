import React from "react";
import PropTypes from "prop-types";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

export default function Search({ handleSearch }) {
  return (
    <InputGroup
      className="search"
      style={{ width: "50%", margin: "50px auto" }}
    >
      <FormControl
        placeholder="Search for a game here..."
        onChange={event => handleSearch(event)}
      />
    </InputGroup>
  );
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
};
