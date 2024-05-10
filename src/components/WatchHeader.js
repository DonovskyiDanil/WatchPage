import React, { useContext } from 'react';
import './WatchHeader.css';
import MovieContext from '../contexts/MovieContext';

const WatchHeader = () => {
    const { selectedMovie } = useContext(MovieContext);

    if (!selectedMovie) {
        return <header className="watch-header">No movies selected</header>;
    }

    return (
        <header className="watch-header">
            <div className="header-content">
                <h1 className="header-title">{selectedMovie.title} - {selectedMovie.director}</h1>
                <div className="header-logo">
                    <img src={selectedMovie.imageUrl} alt="Movie Logo" style={{ height: '50px' }} />
                </div>
            </div>
        </header>
    );
};

export default WatchHeader;