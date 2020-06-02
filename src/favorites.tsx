import * as React from 'react';
import { Store } from './store';
import ArtistInfo from './artist-info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Favorites = () => {
    const {state, dispatch} = React.useContext(Store);

    const addFavorite = (artistName) => {
        const favoritesData = {
            name: artistName,
            bio: '',
            listeners: 0,
            tags: [],
            albums: []
        };
        state.lastfm.artistInfo({ name: artistName }, (err, data) => {
            if (err) console.error(err);
            favoritesData.bio = data.summary;
            favoritesData.listeners = data.listeners;
            favoritesData.tags = data.tags;
            return dispatch({ 
                type: 'ADD_FAV',
                payload: favoritesData
                })
        });
    };

    const removeFavorite = (artistName) => {
        const favoritesMinusFav = state.favorites.filter((fav) => { 
            if (fav.name !== artistName) {
                return fav;
            }
        });
        return dispatch({ 
            type: 'REMOVE_FAV',
            payload: favoritesMinusFav
        })
    }

    const setFeaturedArtist = (artistName) => {
        let artistData = {
            name: artistName,
            bio: '',
            listeners: 0,
            tags: [],
            albums: []
        };
        state.lastfm.artistInfo({ name: artistName }, (err, data) => {
            if (err) console.error(err);
            artistData.bio = data.summary;
            artistData.listeners = data.listeners;
            artistData.tags = data.tags;
            state.lastfm.artistTopAlbums({ name: artistName, limit: 20 }, (err, discData) => {
                if (err) console.error(err);
                artistData.albums = discData.result;
                return dispatch({
                    type: 'SET_FEATURED',
                    payload: artistData
                })
            });
        });
    };

    return (
        <div className='artist-display'>
            <div className='artist-list'>
                <h2>Your Favorite Artists:</h2>
                <hr className='fav-hr'/>
                {state.favorites.map((artist, index) =>
                    <div key={index}>
                        <div className='artist-list-item'>
                            <div onClick={() => {removeFavorite(artist.name)}}  className='fav-btn'>
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                            <div onClick={() => {setFeaturedArtist(artist.name)}} className='artist-item'>
                                <div>{artist.name}</div>
                                <div><FontAwesomeIcon icon={faChevronRight} /></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <ArtistInfo featuredArtist={state.featuredArtist}/>
        </div>
    )
}

export default Favorites;