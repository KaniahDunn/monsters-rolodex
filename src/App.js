import React, { Component } from 'react'

import { CardList } from './components/card-list/card-list.component'
// import { Card } from './components/card-list/card/card.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
    // binding the 'this' keyword can be done this way or an arrow function can be used to bind this on a method that is created on a class component
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({
      searchField: e.target.value
    })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(
        searchField.toLowerCase()
      )
    )
    return (
      <div className="App">
        <SearchBox
          placeholder='Search Monsters'
          handleChange={this.handleChange}
        />
        <CardList
          monsters={filteredMonsters}>
        </CardList>
      </div>
    )
  }
}

export default App;
