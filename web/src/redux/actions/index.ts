import {
    CHANGE_INPUT_VALUE, FETCH_ALBUM_DETAILS_BY_COLLECTION_ID, FETCH_ALBUMS_BY_ARTIST
} from './actionTypes'

export const changeInputValue = (key, value) => {
    return ({type: CHANGE_INPUT_VALUE, key, value})
}

export const fetchAlbumsByArtist = () => {
    return ({type: FETCH_ALBUMS_BY_ARTIST})
}

export const fetchAlbumDetailsByCollectionId = (collectionId: number) => {
    return ({type: FETCH_ALBUM_DETAILS_BY_COLLECTION_ID, collectionId})
}