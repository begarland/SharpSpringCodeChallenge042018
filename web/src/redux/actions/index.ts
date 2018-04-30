import {
    CHANGE_INPUT_VALUE, FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_REDIRECT, FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_NO_REDIRECT,
    FETCH_ALBUMS_BY_ARTIST_ID, FETCH_ARTIST_BY_NAME, CHANGE_ARTIST_ID, CLOSE_SEARCH
} from './actionTypes'

export const changeInputValue = (key, value) => {
    return ({type: CHANGE_INPUT_VALUE, key, value})
}

export const fetchAlbumsByArtistId = () => {
    return ({type: FETCH_ALBUMS_BY_ARTIST_ID})
}

export const fetchAlbumDetailsByCollectionId = (collectionId: number, collectionName: string, redirect: boolean) => dispatch =>  {
    if (redirect) {
        dispatch({type: FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_REDIRECT, collectionId, collectionName})
    } else {
        dispatch({type: FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_NO_REDIRECT, collectionId, collectionName})

    }
}

export const fetchArtistsByName = () => {
    return ({type: FETCH_ARTIST_BY_NAME})
}

export const chooseArtistToDisplay = (artistId: number) => dispatch => {
    dispatch({type: CHANGE_ARTIST_ID, artistId})
    dispatch({type: FETCH_ALBUMS_BY_ARTIST_ID})
}

export const closeSearch = () => (dispatch, getState) => {
    dispatch({type: CLOSE_SEARCH})
}