import { useEffect } from "react"
import FavouriteMoviesList from "./components/FavouriteMoviesList"
import Header from "./components/Header"
import { MovieList } from "./components/MovieList"
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<MovieList/>}></Route>
        <Route path="/movies" element={<MovieList/>}></Route>
        <Route path="/favourite" element={<FavouriteMoviesList/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
