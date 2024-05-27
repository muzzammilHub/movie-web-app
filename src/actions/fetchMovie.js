import axios from "axios"
import { addMovie } from "../utils/movieSlice"

// rendering movie using higher order function
export const renderMovie = () => async(dispatch) =>{

    try {
        const {data} = await axios.get(`${import.meta.env.VITE_MOVIE_URL}`)
        dispatch(addMovie(data))
    } catch (error) {
        console.log(`Error in fetching movie: ${error}`)
    }
}