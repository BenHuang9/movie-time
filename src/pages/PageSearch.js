import searchlogo from'../images/search.svg';
import { API_KEY } from '../globals/globals';
import Movies from '../components/Movies';
import { appTitle } from '../globals/globals';
import { useEffect, useState } from 'react';

function PageSearch() {

    useEffect(() => {
		document.title = `${appTitle} - Search`;
	}, []);

    const [searchInput,setSearchInput] = useState("");
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${searchInput}&include_adult=false`);
        const searchMoviesFromAPI = await res.json();
        // console.log(searchInput);
        // console.log(searchMoviesFromAPI.results);
        setMovies(searchMoviesFromAPI.results); 
    }
    
    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }
    

    return (
        <>
        <div className='search-page'>
        <section className="search-title">
            <h2>Search</h2>
        </section>
        <form onSubmit={searchMovies} id="search">
        <input type="search" className="search-bar" value={searchInput} onChange={handleChange}  placeholder="i.e. Jurassic Park" />
        <button type="submit" className='search-submit'><img src = {searchlogo} className="searchlogo" alt = "search logo"/></button>
        </form>
        
        <div className='search-list'>
            
            <Movies movies={movies} />
        </div>
        </div>
        </>
    )
  
}
export default PageSearch;


