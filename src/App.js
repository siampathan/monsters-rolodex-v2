import { useState, useEffect } from 'react';
import  CardList from './components/card-list/card-list';
import  Search  from './components/search/search';
import './App.css';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1>Monsters Rolodex v2</h1>
      <Search 
        placeholder= "search monsters"
        onChangeHandler={onSearchChange}
      />
      <CardList 
        monsters={filteredMonsters}
      />
    </div>
  )
}

export default App;
