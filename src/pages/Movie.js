import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Movie = () => {
    const movie_id = useParams().id;

    const [credits, setCredits] = useState(undefined);
    const [movie, setMovie] = useState(undefined);

    const getMovie = async () => {
        const res = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie_id}?api_key=8c2bb096c0cc0bce9d86da94c9703cdd&language=en-US`
        );
        setMovie(res.data);
    }

    const getCredits = async () => {
        const res = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=8c2bb096c0cc0bce9d86da94c9703cdd&language=en-US`
        );
        setCredits(res.data);
    }

    useEffect(() => {
        getCredits();
        getMovie();
    }, []);

    if (credits === undefined || movie === undefined) return (<></>);
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

            {credits.cast.map((item) => (
                <div className="container-popMovies">
                    <div className="card-img">
                        {
                            item?.profile_path ?
                                <img className="backdrop-img"
                                    src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                                    alt='poster-icon'
                                />
                                : null
                        }
                        <h3>{item.name}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Movie;