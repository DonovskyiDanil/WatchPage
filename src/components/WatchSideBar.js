import React, { useContext } from 'react';
import './WatchSideBar.css';
import MovieContext from '../contexts/MovieContext';

const WatchSideBar = () => {
    const { selectedMovie } = useContext(MovieContext);

    if (!selectedMovie) {
        return <aside className="sidebar-container">No movies selected</aside>;
    }

    return (
        <aside className="sidebar-container">
            <div className="sidebar-title">
                <h2>{selectedMovie.title} - {selectedMovie.director}</h2>
            </div>
            <div className="sidebar-logo">
                <img src={selectedMovie.imageUrl} alt={selectedMovie.title} />
            </div>
        </aside>
    );
};

export default WatchSideBar;