import MovieList from "./components/MovieList";
import './App.css'
import Navbar from "./components/Navbar";
import { MovieProvider } from "./components/MovieContext";


function App() {
  
  return (
    <MovieProvider>
      <div className="app">
        <Navbar />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
