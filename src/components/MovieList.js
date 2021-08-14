import React from 'react'
import { useState  , useContext} from "react";
import MovieHolder from './MovieHolder';
import Navbar from "./Navbar";

import { MovieContext } from './MovieContext';



const MovieList = () => {
    const [movies] = useContext(MovieContext);
   
    return (
      <div>
      
        {movies.map((movie) => (
          <MovieHolder mName={movie.name} mPrice={movie.Price} key={movie.id} />
        ))}

        
      </div>
    );
}

export default MovieList
