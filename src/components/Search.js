import React from "react";
import { ReactComponent as Arrow } from "../assets/icon-arrow.svg";

const Search = ({ search }) => {
  return (
    <form onSubmit={(e) => search(e)}>
      <input type="text" placeholder="Search for any IP adress or domain" />
      <button type="submit">
        <Arrow />
      </button>
    </form>
  );
};

export default Search;
