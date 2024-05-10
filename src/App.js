import React, { Component } from 'react';
import WatchHeader from './components/WatchHeader';
import WatchSideBar from './components/WatchSideBar';
import WatchList from './components/WatchList';
import MovieContext from './contexts/MovieContext';
import './App.css';

export default class App extends Component {
    state = {
        movies: [
            { id: 1, title: 'Время', director: 'Эндрю Никкол', imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/e/e0/Intimefairuse.jpg', isDone: false },
            { id: 2, title: 'Я легенда', director: 'Уилл Смитт', imageUrl: 'https://ixbt.online/live/images/original/20/28/05/2023/01/20/5f88cf8bd0.png', isDone: false },
            { id: 3, title: 'Бешенство', director: 'Алексей Серебряков', imageUrl: 'https://www.kino-teatr.ru/movie/posters/big/1/144811.jpg', isDone: false },
            { id: 4, title: 'Харли Квин', director: 'Марго Робби', imageUrl: 'https://www.iphones.ru/wp-content/uploads/2020/01/5F6EF5F3-13BC-4E08-B757-9A89E031B676.jpeg', isDone: false },
            { id: 5, title: 'Джон Уик', director: 'Киану Ривз', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwA8SEG7_pEMkI72sd27E3Y2n7ubkBpsySSw&usqp=CAU', isDone: false }
        ],
        selectedMovieId: 1,
        newMovieTitle: '',
        newMovieDirector: '',
        newMovieImageUrl: ''
    };

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const newMovie = {
            id: this.state.movies.length + 1,
            title: this.state.newMovieTitle,
            director: this.state.newMovieDirector,
            imageUrl: this.state.newMovieImageUrl,
            isDone: false
        };
        this.setState(prevState => ({
            movies: [...prevState.movies, newMovie],
            newMovieTitle: '',
            newMovieDirector: '',
            newMovieImageUrl: ''
        }));
    };

    handleToggle = (id) => {
        this.setState(prevState => ({
            movies: prevState.movies.filter(movie => movie.id !== id)
        }));
    };
    
    handleSelectMovie = (id) => {
        this.setState({ selectedMovieId: id });
    };

    render() {
        const selectedMovie = this.state.movies.find(movie => movie.id === this.state.selectedMovieId);

        return (
            <MovieContext.Provider value={{ movies: this.state.movies, selectedMovie }}>
                <div className="frame">
                    <WatchHeader />
                    <WatchSideBar />
                    <WatchList
                        movies={this.state.movies}
                        onToggle={this.handleToggle}
                        onSelectMovie={this.handleSelectMovie}
                        newMovieTitle={this.state.newMovieTitle}
                        newMovieDirector={this.state.newMovieDirector}
                        handleInputChange={this.handleInputChange}
                        handleSubmit={this.handleSubmit}
                    />
                </div>
            </MovieContext.Provider>
        );
    }
}