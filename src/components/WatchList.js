import React, { Component } from 'react';
import './WatchList.css'; 

export class WatchList extends Component {
    render() {
        const { movies, onToggle, onSelectMovie, newMovieTitle, newMovieDirector, handleInputChange, handleSubmit } = this.props;
        
        if (!movies) {
            return <div>Loading...</div>; // Loading indicator or message
        }

        return (
            <div className="watch-container">
                <div className="movie-list">
                    {movies.map((movie) => (
                        <div key={movie.id}
                             className={'watch-item' + (movie.isDone ? ' done' : '')}
                             onClick={() => onSelectMovie(movie.id)}> 
                            <p className='content'>{movie.title} produced by {movie.director}</p>
                            <span className='delete-btn' onClick={(e) => {
                                e.stopPropagation(); 
                                onToggle(movie.id);
                            }}>X</span>
                        </div>
                    ))}
                </div>
                <div className="movie-form">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="newMovieTitle"
                            value={newMovieTitle}
                            onChange={handleInputChange}
                            placeholder="Title"
                        />
                        <input
                            type="text"
                            name="newMovieDirector"
                            value={newMovieDirector}
                            onChange={handleInputChange}
                            placeholder="Director"
                        />
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default WatchList;