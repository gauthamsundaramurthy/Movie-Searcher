import React from 'react'
import './Movie.css'
import {MovieInfo} from '../MovieInfo/MovieInfo'

export class Movie extends React.Component {
  render () {
    let cast = this.props.movieInfo.actor_1_name + ', ' + this.props.movieInfo.actor_2_name
    return (
      <div className='movie'>
        <div className='title-container'>
          <div className='movie-name'> {this.props.movieInfo.movie_title} </div>
        </div>
        <MovieInfo keyword='Directed by' value={this.props.movieInfo.director_name} />
        <MovieInfo keyword='Cast' value={cast} />
        <MovieInfo keyword='Popularity' value={this.props.movieInfo.content_rating} />
        <MovieInfo keyword='Year' value={this.props.movieInfo.title_year} />
        <MovieInfo keyword='Language' value={this.props.movieInfo.language} />
        <MovieInfo keyword='Country' value={this.props.movieInfo.country} />
        <MovieInfo keyword='ImdbLink' value={this.props.movieInfo.movie_imdb_link} />
      </div>
    )
  }
}
