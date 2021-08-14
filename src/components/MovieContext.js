import react , {useState , createContext} from 'react'

export const MovieContext = createContext()

export const MovieProvider=(props)=>{
     const [movies, setMovies] = useState([
      { name: "Harry Potter", Price: "100rs", id: 1 },
      { name: "Inception", Price: "200rs", id: 2 },
      { name: "Rambo", Price: "150rs", id: 3 },
    ]);
 return(
       <MovieContext.Provider value={[movies]}>
           {props.children}
       </MovieContext.Provider>
 )
}