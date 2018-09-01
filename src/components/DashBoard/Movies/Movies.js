import React from 'react'
import './Movies.css'
import searchIcon from '../../../assets/images/search.png'
import {Movie} from '../../reusables/Movie/Movie'
import * as config from '../../../endPoints/EndPoints'
import fetch from 'cross-fetch'

class Movies extends React.Component {
  constructor () {
    super()
    this.state = {
      userInput: '',
      showMovies: [],
      moviesList: []
    }
    this.userInput = this.userInput.bind(this)
  }

  componentDidMount () {
    fetch(config.moviesEndPoint)
      .then(response => response.json())
      .then(movieList => this.setState({showMovies: movieList, moviesList: movieList}))
  }

  userInput (e) {
    this.setState({
      showMovies: [],
      userInput: e.target.value
    })
    let userInput = e.target.value
    let showMovies=[]
    
    /* Initially category set to 'All' which loads entire movie list */
    /* Once user clicks category, based on the category movies are been displayed */
    

    if (this.props.category === 'All') {
      return this.state.moviesList.map((movie) => {
        showMovies.push(movie)
        this.setState({
          showMovies: showMovies
        })
      }
      )
    } else if (this.props.category === 'Name') {
      return this.state.moviesList.map((movie) => {
        if (movie.movie_title.trim().toLowerCase() === userInput.trim().toLowerCase()) {
          showMovies.push(movie)
          this.setState({
            showMovies: showMovies
          })
        }
      })
    } else if (this.props.category === 'Country') {
      return this.state.moviesList.map((movie) => {
        if (movie.country.trim().toLowerCase() === userInput.trim().toLowerCase()) {
          showMovies.push(movie)
          this.setState({
            showMovies: showMovies
          })
        }
      })
    } else if (this.props.category === 'Language') {
      return this.state.moviesList.map((movie) => {
        if (movie.language.trim().toLowerCase() === userInput.trim().toLowerCase()) {
          showMovies.push(movie)
          this.setState({
            showMovies: showMovies
          })
        }
      })
    } else if (this.props.category === 'Year') {
      return this.state.moviesList.map((movie) => {
        if (movie.title_year.trim().toLowerCase() === userInput.trim().toLowerCase()) {
          showMovies.push(movie)
          this.setState({
            showMovies: showMovies
          })
        }
      })
    } else if (this.props.category === 'Rating') {
      return this.state.moviesList.map((movie) => {
        if (movie.content_rating.trim().toLowerCase() === userInput.trim().toLowerCase()) {
          showMovies.push(movie)
          this.setState({
            showMovies: showMovies
          })
        }
      })
    }
  }

  render () {
    let showMovies = this.state.showMovies.map(movie => <Movie movieInfo={movie} />)
    return (
      /* Display area */
      <div className='display-container'>
        <div className='search-area'>
          <img src={searchIcon} className='search-icon' alt='search-icon' />
          <input type='text' className='search-input' placeholder='Search movies..' onChange={this.userInput} />
        </div>
        <div className='movies-container'>
          {showMovies}
        </div>
      </div>
    )
  }
}

export default Movies
