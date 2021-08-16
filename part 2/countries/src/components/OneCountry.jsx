import React from "react";

const OneCountry = ({ country }) => {
  return (
    <div>
      {country.map((value) => (
        <div>
          {value.name}
          {value.nativeName}
          {value.flag}
        </div>
      ))}
    </div>
  );
};

export default OneCountry;
