import { React, useEffect, useState } from "react";
import axios from "axios";
import "./app.css";

import Add from "./components/Add";
import NumbersList from "./components/NumbersList";
import Search from "./components/Search";

const App = () => {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
      console.log(response.data);
    });
  }, []);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    persons.find(({ name }) => name === newName)
      ? alert("Already added")
      : setPersons(persons.concat(personObject));
  };
  const nameHandler = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  const numberHandler = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };
  // Search
  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <Search onChange={searchHandler} />
      <Add
        onSubmit={addPerson}
        handleNameChange={nameHandler}
        newName={newName}
        handleNumberChange={numberHandler}
        newNumber={newNumber}
      />
      <NumbersList search={search} nameList={persons} heading="Numbers" />
    </div>
  );
};

export default App;
