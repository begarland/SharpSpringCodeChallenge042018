import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { combineEpics } from 'redux-observable'
import appState from './appReducer'
import albumCollection from './albumCollectionReducer'
import artistSearch from './artistSearchReducer'
import albumTracks from './albumTracksReducer'
import fetchAlbumsByArtistId from '../epics/fetchAlbumsByArtistId'
import fetchAlbumDetailsByCollectionIdRedirect from '../epics/fetchAlbumDetailsByCollectionIdRedirect'
import fetchAlbumDetailsByCollectionIdNoRedirect from '../epics/fetchAlbumDetailsByCollectionIdNoRedirect'

export const rootReducer =  combineReducers({
    router: routerReducer,
    appState,
    albumCollection,
    albumTracks,
    artistSearch,


})

export const rootEpic = combineEpics (
    fetchAlbumsByArtistId,
    fetchAlbumDetailsByCollectionIdRedirect,
    fetchAlbumDetailsByCollectionIdNoRedirect,

)