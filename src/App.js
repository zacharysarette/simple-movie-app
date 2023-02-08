import React, { useEffect, useState } from 'react';
import './App.css'
import MovieCard from './MovieCard';
import SearchIcon from './search.svg'
const API_URL = 'http://omdbapi.com?apikey=34739720'
const movie1 = {
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
}
const App = () => {
    const [movies, setMovies] = useState([movie1])
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovies = async (title) => {
         const response = await fetch(`${API_URL}&s=${title}`);
         const data = await response.json()
         console.log(data)
         setMovies(data.Search)
    } 
    useEffect(()=>{
        searchMovies('Spiderman')
    }, [])
    return(
        <div className='app'>
        <h1>MovieLand</h1>
        <div class='search'>
        <input
            placeholder='Search for Movies'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
        />
        <img
            src={SearchIcon}
            alt='search'
            onClick={() => searchMovies(searchTerm)}
        />
        </div>
            <div className="container">
            { 
                movies?.length > 0 ?
                movies?.map(
                    e => <MovieCard key={e.Title + e.Year } {...e}/>
                ) : (
                <div className="empty">
                    No movies found
                </div>)
            }
            </div>
        </div>
    )
}

export default App