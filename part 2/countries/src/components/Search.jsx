import React from "react";

const Search = ({ change, toSearch }) => {
  return (
    <div className="searchField">
      <input
        type="text"
        placeholder="search"
        value={toSearch}
        onChange={change}
      />
    </div>
  );
};

export default Search;
