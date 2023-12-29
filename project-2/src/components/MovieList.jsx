import React from 'react';

const MovieList = (props) => {
  const { movies, handleFavouritesClick, favouriteComponent } = props;

  return (
    <>
      {movies.map((movie, index) => (
        <div key={index} className='image-container d-flex justify-content-center m-2'>
          <img
            src={movie.Poster}
            alt='movie'
          
          />
          <div
            onClick={() => handleFavouritesClick(movie)}
            className='overlay d-flex align-items-center justify-content-center'
          >
            {React.createElement(favouriteComponent)}
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
