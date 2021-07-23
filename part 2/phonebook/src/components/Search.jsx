import React from "react";

const Search = ({ onChange }) => {
  return (
    <div>
      Filter shown with
      <input type="text" placeholder="Search..." onChange={onChange} />
    </div>
  );
};

export default Search;
