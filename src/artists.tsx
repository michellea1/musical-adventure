import * as React from 'react';
import { Store } from './store';
import ArtistListItem from './artist-list-item';
import ArtistInfo from './artist-info';

const Artists = (props: any): JSX.Element => {
    type FormElem = React.FormEvent<HTMLFormElement>

    interface IArtists {
        images: string[];
        listeners: number;
        name: string;
        type: string;
    }

    const {state, dispatch} = React.useContext(Store);
    const [value, setValue] = React.useState<string>('');
    const [artists, setArtists] = React.useState<IArtists[]>([]);

    const handleSubmit = (e: FormElem):void => {
        e.preventDefault();
        let artistsData = [];
        state.lastfm.artistSearch({ q: value, limit: 10 }, (err, data) => {
            if (err) console.error(err);
            artistsData = data.result;
            setArtists(artistsData);
        });
    };

    return (
        <div className='artist-display'>
            <div className='artist-list'>
                <h2>Search For An Artist Here:</h2>
                <hr/>
                <form onSubmit={handleSubmit} className='artist-form' placeholder='Artist Name'>
                    <input className='artist-input' type="text" value={value} onChange={e => setValue(e.target.value)} required />
                    <button className='search-btn' type="submit">Search</button>
                </form>
                {artists.map((artist, index) =>
                    <ArtistListItem key={index} artist={artist}/>
                )}
            </div>
            <ArtistInfo featuredArtist={state.featuredArtist}/>
        </div>
    );
};

export default Artists;