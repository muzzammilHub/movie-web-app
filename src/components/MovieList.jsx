import React, { useEffect, useState } from 'react'
import { renderMovie } from '../actions/fetchMovie'
import { useDispatch, useSelector } from 'react-redux'
import MovieCard from './MovieCard'

export const MovieList = () => {
  const dispatch = useDispatch()
  const [sortedMoviesList, setSortedMoviesList] = useState([])

  // getting movies data from store
  const {movieList} = useSelector((store)=>store.movie)

  // sorting logic in descending order with respect to rating
  const sortedMovies = ()=>{
    if(Array.isArray(movieList)){
      let sorted = [...movieList].sort((a,b)=> parseFloat(b.rating) - parseFloat(a.rating))
      setSortedMoviesList(sorted)
    }
  }
  
  // re-render the component if changes occured in dispatch
  useEffect(()=>{
    dispatch(renderMovie())
  }, [dispatch])

  // re-render the component if changes occured in movieList
  useEffect(()=>{
    sortedMovies()
  }, [movieList])


  return  (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sortedMoviesList?.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  </div>
  )
}
