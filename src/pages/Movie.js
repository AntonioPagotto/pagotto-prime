import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import notfoundprofile from '../media/profile-not-found.png';
import Loading from '../components/Loading';

const Movie = () => {
    const movie_id = useParams().id;

    const [credits, setCredits] = useState(undefined);
    const [movie, setMovie] = useState(undefined);

    const getMovie = async () => {
        const res = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie_id}?api_key=8c2bb096c0cc0bce9d86da94c9703cdd&language=pt-BR`
        );
        setMovie(res.data);
    }

    const getCredits = async () => {
        const res = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=8c2bb096c0cc0bce9d86da94c9703cdd&language=pt-BR`
        );
        setCredits(res.data);
    }

    useEffect(() => {
        getCredits();
        getMovie();
    }, []);

    if (credits === undefined || movie === undefined) return (<Loading />);
    return (
        <div>
            <div className="bg-image" style={{ backgroundImage: "url(" + `https://image.tmdb.org/t/p/original/${movie.poster_path}` + ")" }} >
                <div className="gradient">
                    <div className="title">
                        <h1>{movie.title}</h1>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            </div>
            <div>
                <h2>Elenco</h2>
            </div>
            <div className="container-popMovies">
                {credits.cast.map((item) => (
                    <div className="card-img">
                        {
                            item?.profile_path ?
                                <img className="cast-img" src={`https://image.tmdb.org/t/p/original/${item.profile_path}`} alt='poster-icon' />
                                :
                                <img className="cast-img" src={notfoundprofile} alt='poster-icon' />
                        }
                        <h3>{item.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Movie;