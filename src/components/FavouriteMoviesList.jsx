import React from 'react'
import { useSelector } from 'react-redux'

const FavouriteMoviesList = () => {

  // accesing favourite movies list from redux store
  const {favoriteMovies} = useSelector((store)=>store.movie)

  return (
  <div>
    { favoriteMovies.length !== 0 ? 
      <div className="flex  justify-center p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            favoriteMovies?.map((fav, index)=>(
              <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-50 hover:scale-105 hover:shadow-xl"
        >
        <div className="flex flex-col items-center p-4">
              <img 
              className="w-24 h-24 mb-4"
              src='https://seeklogo.com/images/M/movie-time-cinema-logo-8B5BE91828-seeklogo.com.png' />
              <a
                href={fav?.imdb_url}
                target="_blank"
                rel="noopener noreferrer"
                
              >
              <p className="text-lg font-semibold text-gray-800 mb-2">{fav?.movie}</p>
              </a>
              <p className="text-sm text-gray-600 mr-4">{fav?.rating}</p>
        </div>
        </div>
          ))
        }
      </div> 
      </div> : 
      <div className=' text-[3rem] text-center mt-[10%] font-semibold text-red-600'>
        No movies added to favourite!!
      </div>
    }
  </div>
  )
}

export default FavouriteMoviesList