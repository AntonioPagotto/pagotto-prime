import React, { useEffect, useState } from 'react';

import '../styles/App.css';

const Slide = ({
    topRatedList
}) => {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setIndex(
                Math.floor(Math.random() * (15 + 1) + 1)
            );
        }, 20000)
    }, [])

    return (
        <>
            <div>
                <div class="bg-image" style={{
                    backgroundImage: "url(" + `https://image.tmdb.org/t/p/original${topRatedList[index].backdrop_path}` + ")"
                }} >
                    <div class="gradient">
                        <div class="title">
                            <h1>{topRatedList[index].title}</h1>
                            <p>{topRatedList[index].overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>);
};

export default Slide;