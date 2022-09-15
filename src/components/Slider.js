import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import noPoster from '../images/no-movie-poster.jpg';
import { Link } from 'react-router-dom';


function Slider({movies}) {
    const items = movies?.map((movie) => (
        <Link to={`/movie/${movie.id}` }>
        <div className="carouselItem">
            {movie.backdrop_path === null ?
            <img src={noPoster} alt="No Poster" /> :
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
                alt={`${movie.title} Poster`}
                className="carouselItem-img" />
            }
            <div className='movie-info'>
            {movie.title}
            <div className='movie-date'>
            {movie.release_date}
            </div>
            <div className='overview'>
            {movie.overview}
            </div>
            </div>
        </div>
        </Link>
    ));

  return (
    <AliceCarousel 
        activeIndex={0}
        autoPlay
        autoPlayStrategy='none'
        autoPlayInterval={4000} 
        infinite
        animationType='fadeout' 
        disableButtonsControls 
        items={items} />
  );
}
export default Slider;