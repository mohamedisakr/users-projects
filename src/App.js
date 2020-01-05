import React, { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  function populateMonsters() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => setMonsters([...users]))
      .catch(err => console.log("Fetch Error :-S", err));
  }

  function handleSearch(event) {
    setSearchField(event.target.value);
    // console.log(event.target.value);
  }

  function getFiltered(monster) {
    return monster.name.toLowerCase().includes(searchField.toLowerCase());
  }

  useEffect(populateMonsters, []);

  let filteredMonsters = monsters.filter(getFiltered);

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder="Search for Monster" handleChange={handleSearch} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;

// <input
//       type="search"
//       placeholder="Search for Monster"
//       onChange={handleSearch}
//     />
