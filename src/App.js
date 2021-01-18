import React, { Component } from 'react'
import axios from 'axios'

import './App.css'

import BeerCard from './BeerCard'

class App extends Component {
  constructor() {
    super()

    this.state = {
      arrayOfBeer: [],
      likedBeer: []
    }
  }

  handleLike = (id) => {
    this.setState({ 
      likedBeer: [...this.state.likedBeer, this.state.arrayOfBeer.filter((beer => beer.id === id))[0]] })
    this.state.arrayOfBeer.splice(this.state.arrayOfBeer.findIndex(beer => beer.id === id), 1)
  }

  componentDidMount() {
    axios.get('https://api.punkapi.com/v2/beers')
      .then(res => {
        const arrayOfBeer = res.data
        this.setState({ arrayOfBeer })
      })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h1>Beers:</h1>
            <ol>
              {this.state.arrayOfBeer.map((beer, index) => {
                return (
                  <BeerCard
                    key={index}
                    id={beer.id}
                    name={beer.name}
                    image_url={beer.image_url}
                    first_brewed={beer.first_brewed}
                    tagline={beer.tagline}
                    abv={beer.abv}
                    description={beer.description}
                    handleLike={this.handleLike} />)
              })}
            </ol>
          </div>
          <div>
            <h1>Liked Beers:</h1>
            <ol>
            {this.state.likedBeer.map((beer, index) => {
                return (
                  <BeerCard
                    key={index}
                    index={index}
                    id={beer.id}
                    name={beer.name}
                    image_url={beer.image_url}
                    first_brewed={beer.first_brewed}
                    tagline={beer.tagline}
                    abv={beer.abv}
                    description={beer.description}
                    handleLike={this.handleLike} />)
              })}
            </ol>
          </div>
        </header>
      </div>
    )
  }
}

export default App;
