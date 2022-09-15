import { NavLink } from 'react-router-dom';

function NavSort() {
    return (
        <nav className="nav-sort">
            <ul>
                <li>
                    <NavLink to='/'>Now Playing</NavLink>
                </li>
                <li>
                    <NavLink to='/sort/upcoming'>Upcoming</NavLink>
                </li>
                <li>
                    <NavLink to='/sort/popular'>Popular</NavLink>
                </li>
                <li>
                    <NavLink to='/sort/top-rated'>Top Rated</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavSort;
