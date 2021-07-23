import React from "react";

const NumbersList = ({ nameList, heading, search }) => {
  return (
    <div>
      <h1>{heading}</h1>
      {nameList
        .filter((val) => {
          if ({ search } === "") {
            return val;
          } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        })
        .map((value) => {
          return (
            <div key={value.id}>
              {value.name}: {value.number}
            </div>
          );
        })}
    </div>
  );
};

export default NumbersList;
