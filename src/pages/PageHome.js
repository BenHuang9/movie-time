import { useEffect, useState } from 'react';
import NavSort from '../components/NavSort';
import Movies from '../components/Movies';
import Slider from '../components/Slider';
import { API_KEY } from '../globals/globals';
import { appTitle } from '../globals/globals';


function PageHome({ sort }) {


    const [moviesData, setMoviesData] = useState(null);

    useEffect(() => {

        document.title = `${appTitle} - Home`;

        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?api_key=${API_KEY}&language=en-US&page=1`);
            let moviesDataFromAPI = await res.json();
            // Get the first 12 movies from the returned movies array...
            moviesDataFromAPI = moviesDataFromAPI.results.splice(0, 16);
            setMoviesData(moviesDataFromAPI);
        }

        fetchMovies();

    }, [sort]);

    return (
        <section className="home-page">
            <div className="hero-carousel">
                <Slider movies={moviesData} />
            </div>
            <NavSort />
            {moviesData !== null && <Movies movies={moviesData} />}
        </section>
    )
}

export default PageHome;
