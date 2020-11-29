import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';

const PopularMovies = ({
  popularMovie: { poster_path, id },
}) => {
  const navigate = useNavigate();
  return (
    <div className="card-img" onClick={()=>{
      navigate(`/movie/${id}`)
    }}>
      <img className="backdrop-img"
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt='poster-icon'/>
    </div>
  );
};

export default PopularMovies;
