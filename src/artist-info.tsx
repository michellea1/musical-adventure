import * as React from 'react';

const ArtistInfo = (props) => {
    
    return (
        <div className='artist-bio'>
            <h2>Artist Info : {props.featuredArtist.name}</h2>
            <hr/>
            <h3>Biography: </h3>
            <p>{props.featuredArtist.bio}</p>
            <h3>Discography Highlights:</h3>
            <div className='discography'>
                {props.featuredArtist.albums.map((album, index) =>
                    <div key={index}>{album.name}</div>
                )}
            </div>
        </div>
    )
}

export default ArtistInfo;