import { Link } from 'react-router-dom';
import NavMain from './NavMain';
import { useState, useEffect } from 'react';
import searchlogo from'../images/search.svg';
import logoIcon from"../images/logoIcon.svg";



function Header() {

    const [navOpen, setNavOpen] = useState(false);

    const showHideNav = () => {
        setNavOpen(!navOpen);
    }
   
    const isDesktop = (e) => {
        if(e.matches){
            setNavOpen(false);
        }
    }
    
    useEffect(() => {
          let mediaQuery = window.matchMedia('(min-width: 1240px)');
          mediaQuery.addListener(isDesktop);
          // this is the cleanup function to remove the listener
          return () => mediaQuery.removeListener(isDesktop);
    }, []);
    return (
        <header className={navOpen ? 'show' : undefined}>
            
            
            <button className="btn-main-nav" 
                    onMouseDown={(e) => { e.preventDefault(); }}
                    onClick={showHideNav}>
                <span className="hamburger-icon">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </span>
                <span className="sr-only"></span>
            </button>
            <Link to='/'>
                {/* <img src={logo} alt="Logo" className='logo'/> */}
                <div class="logo">
                <img src = {logoIcon} className="logoIcon" alt = "logo icon"/>
                <div>
                <div class="neon">Moive </div>
                <div class="flux">Time </div>
                </div>
                </div>
            </Link>
            <Link to='search-result'>
            <button type="submit" form="search" value="Submit" className='search-submit'><img src = {searchlogo} className="searchlogo" alt = "search logo"/></button>
            </Link>
            <NavMain handleShowHideNav={showHideNav} />
            
        </header>
    )
}

export default Header;
