import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import FavButton from '../components/FavButton';
import { isFav, addToFav, deleteFav  } from '../utilities/storage';
import { useEffect, useState } from 'react';


function MovieCard({ movie }) {
    
    const [movieFav, setMovieFav] = useState(isFav(movie.id));

    useEffect(() => {
        isFav(movie.id);
    }, [movie.id])

    
    function handleFavClick(fav){
        if(fav === true){
            addToFav(movie);
            setMovieFav(true);
        }else{
            deleteFav(movie);
            setMovieFav(false);
        }  
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                {movie.poster_path === null ? 
                    <img src = {noPoster} alt = "No poster available." /> : 
                    <img key={movie.id} src = {`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt = {movie.title} />
                }    
            </div>
            <h3><Link to={`/movie/${movie.id}` }>{movie.title}</Link></h3>
                <div className="rate-date">
                    <p>⭐{movie.vote_average}</p>
                    <p> {movie.release_date}</p>
                </div>
            <div className="movie-info">
                <div className="overview">
                        <p>{movie.overview}</p>
                </div>
                <div className="more-info">
                    <Link to={`/movie/${movie.id}` }>More Info</Link>
                </div>
            </div>
            <div className="btn-favourite">
                {movieFav ? 
                    <FavButton movie={movie} remove={true} handleFavClick={handleFavClick} /> : 
                    <FavButton movie={movie} handleFavClick={handleFavClick} />
                }
            </div>
        </div>
    )
}

export default MovieCard; 

