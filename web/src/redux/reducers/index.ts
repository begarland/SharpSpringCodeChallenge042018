import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { combineEpics } from 'redux-observable'
import appState from './appReducer'
import albumCollection from './albumCollectionReducer'
import fetchAlbumsByArtistEpic from '../epics/fetchAlbumsByArtist'

export const rootReducer =  combineReducers({
    router: routerReducer,
    appState,
    albumCollection,

})

export const rootEpic = combineEpics (
    fetchAlbumsByArtistEpic,

)