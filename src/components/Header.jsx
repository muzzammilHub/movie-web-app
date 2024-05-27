import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="bg-gray-800 text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
            
        <div>
            <Link
            to='/'
            className="text-lg font-semibold ml-6">TopMovies</Link>
        </div>

        <div className="flex space-x-8 mr-6">
            <Link to="/movies" className="text-sm">Movies</Link>
            <Link to="/favourite" className="text-sm">Favourite Movies</Link>
        </div>
    </div>
    </div>
  )
}

export default Header