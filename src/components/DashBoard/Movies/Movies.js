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
    fetch(config.moviesEndPoint, {
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json/'
      }
    })
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
      this.state.moviesList.map((movie) => {
        showMovies.push(movie)
        this.setState({
          showMovies: showMovies
        })
        return showMovies
      }
      )
    } else if (this.props.category === 'Name') {
      this.state.moviesList.map((movie) => {
        if (movie.movie_title.trim().toLowerCase() === userInput.trim().toLowerCase()) {
          showMovies.push(movie)
          this.setState({
            showMovies: showMovies
          })
        }
        return this.state.moviesList
      })
    } else if (this.props.category === 'Country') {
      this.state.moviesList.map((movie) => {
        if (movie.country.trim().toLowerCase() === userInput.trim().toLowerCase()) {
          showMovies.push(movie)
          this.setState({
            showMovies: showMovies
          })
        }
        return this.state.moviesList
      })
    } else if (this.props.category === 'Language') {
      this.state.moviesList.map((movie) => {
        if (movie.language.trim().toLowerCase() === userInput.trim().toLowerCase()) {
          showMovies.push(movie)
          this.setState({
            showMovies: showMovies
          })
        }
        return this.state.moviesList
      })
    } else if (this.props.category === 'Year') {
      this.state.moviesList.map((movie) => {
        if (movie.title_year.trim().toLowerCase() === userInput.trim().toLowerCase()) {
          showMovies.push(movie)
          this.setState({
            showMovies: showMovies
          })
        }
        return this.state.moviesList
      })
    } else if (this.props.category === 'Rating') {
      this.state.moviesList.map((movie) => {
        if (movie.content_rating.trim().toLowerCase() === userInput.trim().toLowerCase()) {
          showMovies.push(movie)
          this.setState({
            showMovies: showMovies
          })
        }
        return this.state.moviesList
      })
    }
  }

  render () {
    let showMovies = this.state.showMovies.length <= 0 ? <div className='no-movies'> No movies to show</div> : this.state.showMovies.map((movie,index) => <Movie key={index} movieInfo={movie} />)
    let placeholderText
    switch (this.props.category) {
      case 'Name': placeholderText = 'Search movies by name'; break
      case 'Year': placeholderText = 'Search movies by year'; break
      case 'Rating': placeholderText = 'Search movies by rating'; break
      case 'Language': placeholderText = 'Search movies by language'; break
      case 'Country': placeholderText = 'Search movies by country'; break
      default: placeholderText = 'Search movies'
    }
    return (
      <div className='display-container'>
        <div className='search-area'>
          <img src={searchIcon} className='search-icon' alt='search-icon' />
          <input type='text' className='search-input' placeholder={placeholderText} onChange={this.userInput} />
        </div>
        <div className='movies-container'>
          {showMovies}
        </div>
      </div>
    )
  }
}

export default Movies
