import * as React from 'react';

const LastFM = require('last-fm');
const lastfm = new LastFM('59335ae76acaf027d0e39b246ab4afa7', { userAgent: 'MyApp/1.0.0 (http://example.com)' });

interface IAction {
    type: string,
    payload: any
}

interface IAlbum {
    artistName: string,
    images: string[],
    listeners: number,
    name: string,
    type: string
}

interface IFav {
    name: string,
    bio: string,
    listeners: number,
    tags: string[],
    albums: IAlbum[]
}

interface IFeatured {
    name: string,
    bio: string,
    listeners: number,
    tags: string[],
    albums: IAlbum[]
}

interface IState {
    featuredArtist: IFeatured,
    favorites: IFav[],
    lastfm: any
}

const initialState: IState = {
    featuredArtist: {
        name: '',
        bio: '',
        listeners: null,
        tags: [],
        albums: []
    },
    favorites: [],
    lastfm: lastfm
}

export const Store = React.createContext<IState | any>(initialState)

function reducer(state: IState, action: IAction): IState {
    switch(action.type) {
        case 'ADD_FAV':
            return { ...state, favorites: [...state.favorites, action.payload] }
        case 'REMOVE_FAV':
            return { ...state, favorites: action.payload }
        case 'SET_FEATURED':
            return { ...state, featuredArtist: action.payload }
        default:
            return state
    }
}

export function StoreProvider(props: any): JSX.Element {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>
}