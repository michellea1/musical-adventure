import * as React from 'react';
import { Link } from '@reach/router';

const Nav = () => {
    return (
        <div className='nav'>
            <Link to='/'><span className='nav-link'>Home</span></Link>
            <Link to='/artists'><span className='nav-link'>Artists</span></Link>
            <Link to='/favorites'><span className='nav-link'>Favorites</span></Link>
        </div>
    );
}

export default Nav;