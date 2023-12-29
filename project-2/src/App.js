

import React , {useState , useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import "./App.css";
function App() {
  const [movies , setMovies] = useState([ ]);
  const [searchValue , setSearchValue ] = useState('');


  const getMoviesRequest = async (searchValue) =>{
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=950dc40f`;

    const responce  = await fetch(url);
    const responseJson = await responce.json();


    if(responseJson.Search){
      setMovies(responseJson.Search);
    }
  };


useEffect(() => {
   getMoviesRequest(searchValue);
}, [searchValue])

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading ="Movies"  />
        <SearchBox searchValue = {searchValue} setSearchValue= {setSearchValue} />
      </div>

    <MovieList
    movies ={movies}
    />
    </div>
  );
}

export default App;
