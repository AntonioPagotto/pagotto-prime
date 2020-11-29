import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import axios from 'axios';
import Slide from './Slide';
import Header from './Header';
import Footer from './Footer';
import Title from './Title';
import PopularMovies from './PopularMovies';

const Home = () => {

  const [popular, setPopular] = useState([]);
  const [toprated, setTopRated] = useState([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      const res = await axios.get(
        'https://api.themoviedb.org/3/movie/popular?api_key=8c2bb096c0cc0bce9d86da94c9703cdd&language=pt-BR&page=1'
      );
      setPopular(res.data.results);
      console.log(res.data.results);
    };
    const getTopRatedMovies = async () => {
      const res = await axios.get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=8c2bb096c0cc0bce9d86da94c9703cdd&language=pt-BR&page=1'
      );
      setTopRated(res.data.results);
      console.log(res.data.results);
    };
    getPopularMovies();
    getTopRatedMovies();
  }, []);

  useEffect(() => {
    console.log({ toprated })
  }, [toprated]);

  if (toprated.length > 0) {
    return (
      <div>
        <Header>
        </Header>
        <div class="container">
          <div>
            <Slide topRatedList={toprated} />
          </div>
          <Title>
          </Title>
          <div class="container-popMovies">
            {popular.map((popularMovie) => (
              <PopularMovies key={popularMovie.id} popularMovie={popularMovie} />
            ))}
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  } else {
    return <></>
  }
};

export default Home;
