function populateMonsters() {
  let monsters = [];
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => (monsters = [...users]))
    .catch(err => console.log("Fetch Error :-S", err));
  return monsters;
}

export default populateMonsters;
