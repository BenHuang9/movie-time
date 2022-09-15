import Movies from '../components/Movies';
import { useState, useEffect } from 'react';
import { appStorageName } from '../globals/globals';
import { appTitle } from '../globals/globals';
import { NavLink } from 'react-router-dom';


function PageFavs() {

    const [moviesData, setMoviesData] = useState(null);

    useEffect(() => {
        let favsStorage = localStorage.getItem(appStorageName);
        document.title = `${appTitle} - Favourite`;
        if(favsStorage !==null){
            favsStorage = JSON.parse(favsStorage);
            setMoviesData(favsStorage);
            return;
        }

    }, []);

    return (
        <main>
            <section className="favs-page">
                <h2>Favourite Page</h2>

                {/* {moviesData !== null && moviesData.length > 0 ?
                    <Movies movies={moviesData} /> : <NoFavMovie /> } */}
                    
                    {moviesData !== null && moviesData.length > 0 ?
                    <Movies movies={moviesData} /> : <><p>Looks like you don't have any favourite movie yet.</p><p>Return to the <NavLink to='/' > Movies</NavLink> page to add some.</p></> }
            </section>
        </main>
    )
}

export default PageFavs;

