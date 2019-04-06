import React, { Component } from 'react'

export class Card extends Component {
  render() {
     //console.log(this.props.results);
    return this.props.results.map((rslt, i) => (
        <div className="col-sm-3 movieContainer" key={rslt.imdbID} >
          <img src={rslt.Poster} className="moviePoster" alt=
            "Movie Poster" />
          <h3>{rslt.Title}</h3>
          <p>{rslt.Year}</p>
          <div> <a target="_blank" className="btn btn-info" rel="noopener noreferrer" href={'https://www.imdb.com/title/' + rslt.imdbID}>View Details</a></div>
        </div>
    )
    );
  }
}

export default Card;
