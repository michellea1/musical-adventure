import * as React from 'react';
import { Link } from '@reach/router'

const Home = (props: any): JSX.Element => {
    return (
        <div className='home'>
            <h1>Welcome To My Wantable Coding Adventure</h1>
            <Link to='/artists'><button className='home-btn'>Start The Adventure</button></Link>
        </div>
    );
}

export default Home;