import React from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { addFavouriteMovie, selectFavoriteMovies ,removeFavouriteMovie } from '../utils/movieSlice'

const MovieCard = ({ movie, index }) => {
    const dispatch = useDispatch()

    // accesing favourite movies
    const favouriteMovies = useSelector(selectFavoriteMovies)

    // checking whether the specific movie is in the favourite or not?
    const isFavourite = favouriteMovies.some((favmovie)=> favmovie.id === movie.id)
    
    // Handling the logic of adding and removing movies from favourite list
    const handleClick = (movie) => {
      if (isFavourite) {
        dispatch(removeFavouriteMovie(movie))
        alert("Removed from favourite!")
      } else {
        dispatch(addFavouriteMovie(movie))
        alert("Added to favourite!")
      }
    }

  return (
    <div
      key={index}
      className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-50 hover:scale-105 hover:shadow-xl"
    >
      <div className="flex flex-col items-center p-4">
        <img
          src="https://seeklogo.com/images/M/movie-time-cinema-logo-8B5BE91828-seeklogo.com.png"
          // src={movie?.image}
          alt="Movie Logo"
          className="w-24 h-24 mb-4"
        />
        <a
        href={movie?.imdb_url}
        target="_blank"
        rel="noopener noreferrer"
        >
        <p className="text-lg font-semibold text-gray-800 mb-2">{movie?.movie}</p>
        </a>
        <div className=' flex items-center'>
            <p className="text-sm text-gray-600 mr-4">{movie?.rating}</p>
            <img
            onClick={()=>handleClick(movie)}
            className=' h-4 cursor-pointer' src={ !isFavourite ? 'https://cdn-icons-png.flaticon.com/128/130/130195.png' : 'https://cdn-icons-png.flaticon.com/128/5644/5644698.png'}/>
        </div>
      </div>
    </div>
  )
}

export default MovieCard