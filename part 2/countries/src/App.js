import { React, useState, useEffect } from "react";
import "./app.css";
import axios from "axios";
import FetchCountries from "./components/FetchCountries";
import Search from "./components/Search";

const App = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      let datas = response.data;
      setCountries(datas);
    });
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };
  console.log(countries.length);

  return (
    <div>
      <Search toSearch={search} change={searchHandler} />
      <FetchCountries search={search} countries={countries} />
    </div>
  );
};

export default App;
