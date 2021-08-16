import { React, useState, useEffect } from "react";
import "./app.css";
import axios from "axios";
import FetchCountries from "./components/FetchCountries";
import Search from "./components/Search";
import SpecificCountry from "./components/SpecificCountry";
import OneCountry from "./components/OneCountry";

const App = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      let datas = response.data;
      setCountries(datas);
      console.log(countries);
    });
  }, []);

  // console.log(countries.length);

  const searchHandler = (event) => {
    setSearch(event.target.value);
    // This is going to give us a new array
    const searchCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResults(searchCountries);
  };

  return (
    <div>
      <Search toSearch={search} change={searchHandler} />
      {searchResults.length === 1 ? <OneCountry country={searchResults} /> : ""}
      {searchResults.length < 10 ? (
        <SpecificCountry country={searchResults} />
      ) : (
        ""
      )}

      {searchResults.length > 10 ? (
        <p>Be specific</p>
      ) : (
        <FetchCountries
          search={search}
          countries={countries}
          searchResults={searchResults}
        />
      )}
    </div>
  );
};

export default App;
