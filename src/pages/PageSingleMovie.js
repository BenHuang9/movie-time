import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_KEY} from '../globals/globals';
import noPoster from '../images/no-movie-poster.jpg';
import Popup from '../components/Popup';
import tag from '../images/tag.svg';
import FavButton from '../components/FavButton';
import { isFav, addToFav, deleteFav } from '../utilities/storage';
import { appTitle } from '../globals/globals';


function PageSingleMovie() {

    const { id } = useParams();
    const [ movie,setMovie ] = useState(null);
    const [ playTrailer,setPlayTrailer ] = useState(false);
    const [ movieFav, setMovieFav ] = useState(null)
    let trailerKey = "";
    let movieDirector = "";

    

    useEffect(() => {
        const getMovie = async () => {
            document.title = `${appTitle} - Movies`;

            const res =await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits`);
            const moviesDataFromAPI = await res.json();
            setMovieFav(isFav(moviesDataFromAPI.id));
            setMovie(moviesDataFromAPI); 
        }

        getMovie();
    

    }, [id]);

    function handleFavClick(fav) {
        if(fav === true) {
            addToFav(movie)
            setMovieFav(true);
        }else {
            deleteFav(movie);
            setMovieFav(false);
        }
    }


    if(movie){
        const filteredArray = movie.videos.results.filter(function(itm){
        return itm.type === "Trailer";

    });
        const director = movie.credits.crew.filter(function(itm){
        return itm.job === "Director";
    });
    trailerKey = filteredArray[0].key;
    movieDirector = director[0].name;
    console.log(movie);
    }



    return (
        
        <>

        {movie !== null &&
        <>
        <div className='single-main'>
        {movie.poster_path == null ?
                    <img src = {noPoster} alt="No poster available." /> :
                    <img src = {`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} className="background-poster" alt = {movie.title} />}
        <section className="single-movie-header">      
            <div className='single-movie-info'>
            <div className="movie-poster">
                {movie.poster_path == null ?
                    <img src = {noPoster} alt="No poster available." /> :
                    <img src = {`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt = {movie.title} />}

                
            </div>
            
            <div className='moive-allinfo'>
                <div className='movie-title'>              
                <h2>{movie.title} ({movie.release_date.substring(0,4)})</h2>
                <div className="btn-favourite">
                    {movieFav ? 
                        <FavButton movie={movie} remove={true} handleFavClick={handleFavClick} /> : 
                        <FavButton movie={movie} handleFavClick={handleFavClick} />
                    }
                </div>
                </div>
                <div className = 'tags'>
                <embed src={tag} />
                    {movie.genres.map((tag, i) => <div key={i} className = "tag"> {tag.name}</div>)}
                    
                </div>
                
                <ul className="user-score">    
                    <li className="star"> 
                        <div>⭐</div>
                        <div>{movie.vote_average}/10 </div>

                    </li>
                    <li>{movie.release_date} ({movie.production_countries[0].iso_3166_1})</li>
                    <li><button className = "trailer-btn" onClick = {()=> setPlayTrailer(true)}><span className = "triangle"> </span>Trailer</button></li>
                </ul>
            <Popup trigger={playTrailer} setTrigger={setPlayTrailer}>
                <iframe src={`https://www.youtube.com/embed/${trailerKey}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Popup>
                    
            
            <section>
                <div className="overview">
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                </div>
                <div className="stats">
                    <div>
                        <h3>Director</h3>
                        <p>{`${movieDirector}`}</p> 
                    </div>  
                    <div>
                        <h3>Budget</h3>
                        <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(movie.budget)}</p>
                    </div>
                    <div>
                        <h3>Revenue</h3>
                        <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(movie.revenue)}</p>
                    </div>
                 
                </div>


            </section>
            </div>
            </div>
            
        
        </section>
        </div>
        </>
        }
        </>
        
    )
}


export default PageSingleMovie;

