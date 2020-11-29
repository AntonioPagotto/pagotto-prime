import React, { useEffect, useState } from 'react';

import '../styles/App.css';

const Slide = ({
    topRatedList
}) => {

    const [index, setIndex] = useState(1);

    useEffect(() => {
        setInterval(() => {
            setIndex(
                Math.floor(topRatedList.length * Math.random() + 1)
            );
        }, 20000)
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div>
                <div className="bg-image" style={{
                    backgroundImage: "url(" + `https://image.tmdb.org/t/p/original${topRatedList[index].backdrop_path}` + ")"
                }} >
                    <div className="gradient">
                        <div className="title">
                            <h1>{topRatedList[index].title}</h1>
                            <p>{topRatedList[index].overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>);
};

export default Slide;