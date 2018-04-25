import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { combineEpics } from 'redux-observable'
import appState from './appReducer'
import albumCollection from './albumCollectionReducer'
import albumTracks from './albumTracksReducer'
import fetchAlbumsByArtistEpic from '../epics/fetchAlbumsByArtist'
import fetchAlbumDetailsByCollectionId from '../epics/fetchAlbumDetailsByCollectionId'

export const rootReducer =  combineReducers({
    router: routerReducer,
    appState,
    albumCollection,
    albumTracks,


})

export const rootEpic = combineEpics (
    fetchAlbumsByArtistEpic,
    fetchAlbumDetailsByCollectionId,
)