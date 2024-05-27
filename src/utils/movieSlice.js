import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState:{
        movieList: [],
        favoriteMovies: [],
    },
    reducers:{
        // adding all movies list
        addMovie: (state, action)=>{
            state.movieList = action.payload
        },

        // adding favourite movies
        addFavouriteMovie: (state, action) => {
            state.favoriteMovies.push(action.payload)
        },

        // removing movie from favourite section
        removeFavouriteMovie: (state, action) => {
            state.favoriteMovies = state.favoriteMovies.filter(
                (movie) => movie.id !== action.payload.id
            )
        },
    }
})


export const { addMovie, addFavouriteMovie, removeFavouriteMovie } = movieSlice.actions

// gives the access of all favourite movies
export const selectFavoriteMovies = (state) => state.movie.favoriteMovies

export default movieSlice.reducer