import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import axios from 'axios';
import Slide from '../components/Slide';
import PopularMovies from '../components/PopularMovies';
import Loading from '../components/Loading';

const Home = () => {

  const [popular, setPopular] = useState([]);
  const [toprated, setTopRated] = useState([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      const res = await axios.get(
        'https://api.themoviedb.org/3/movie/popular?api_key=8c2bb096c0cc0bce9d86da94c9703cdd&language=pt-BR&page=1'
      );
      setPopular(res.data.results);
    };
    const getTopRatedMovies = async () => {
      const res = await axios.get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=8c2bb096c0cc0bce9d86da94c9703cdd&language=pt-BR&page=1'
      );
      setTopRated(res.data.results);
    };
    getPopularMovies();
    getTopRatedMovies();
  }, []);

  useEffect(() => {
  }, [toprated]);

  if (toprated.length <= 0) {
    return <Loading />;
  } else {
    return (
      <div>
        <div>
          <Slide topRatedList={toprated} />
        </div>
        <div>
          <h2>Filmes Populares</h2>
        </div>
        <div className="container-popMovies">
          {popular.map((popularMovie) => (
            <PopularMovies key={popularMovie.id} popularMovie={popularMovie} />
          ))}
        </div>
      </div>
    );
  }
};

export default Home;
