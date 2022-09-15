import { Link } from 'react-router-dom';
import logoIcon from"../images/logoIcon.svg";
const Footer = () => (

    <footer>
        <Link to='/'>
                <div className="logo">
                <img src = {logoIcon} className="logoIcon" alt = "logo icon"/>
                <div>
                <div className="neon">Moive </div>
                <div className="flux">Time </div>
                </div>
                </div>
            </Link>

        <div className="footer-nav">
            <div className='footer-links'>
                <Link to="/"><p>Home</p></Link>
                <Link to="/about"><p>About</p></Link>  
                <Link to="/favs"><p>Favourites</p></Link>
            </div>

            <div>
                <p>Help Center</p>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
            </div>

            <div>
                <p>Contact</p>
                <p>Careers</p>
                <p>CSR</p>
            </div>
        </div>

        

        <p className='footer-copyright'>&copy; Ben(GuangBin) Huang</p>
    </footer>
    
);

export default Footer;
