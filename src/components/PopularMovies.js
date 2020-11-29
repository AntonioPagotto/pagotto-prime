import React from 'react';

import '../styles/App.css';

const PopularMovies = ({
  popularMovie: { title, poster_path },
}) => {
  return (
    <div class="card-img">
      <img class="backdrop-img"
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt='poster-icon'
      />
    </div>
  );
};

export default PopularMovies;
