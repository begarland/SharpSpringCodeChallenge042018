import {
    CHANGE_INPUT_VALUE, FETCH_ALBUM_DETAILS_BY_COLLECTION_ID, FETCH_ALBUMS_BY_ARTIST
} from './actionTypes'
import {push} from 'react-router-redux'

export const changeInputValue = (key, value) => {
    return ({type: CHANGE_INPUT_VALUE, key, value})
}

export const fetchAlbumsByArtist = () => {
    return ({type: FETCH_ALBUMS_BY_ARTIST})
}

export const fetchAlbumDetailsByCollectionId = (collectionId: number, collectionName: string,) => dispatch =>  {
    dispatch({type: FETCH_ALBUM_DETAILS_BY_COLLECTION_ID, collectionId, collectionName})
}
