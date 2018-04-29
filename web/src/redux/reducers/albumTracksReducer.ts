import {albumTracks, AlbumTracksStateTypes} from '../store/templates/albumTracksState'
import {
    FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_FAILED,
    FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_NO_REDIRECT,
    FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_REDIRECT,
    FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_SUCCESSFUL
} from '../actions/actionTypes'


export default (state: AlbumTracksStateTypes = albumTracks, action) => {
    switch (action.type) {
        case FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_REDIRECT: {
            return {
                ...state,
                collectionIdToSearch: action.collectionId,
                collectionName: action.collectionName,
            }
        }
        case FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_NO_REDIRECT: {
            return {
                ...state,
                collectionIdToSearch: action.collectionId,
                collectionName: action.collectionName,
            }
        }
        case FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_SUCCESSFUL: {
            return {
                ...state,
                tracks: action.albumInformation.results
            }
        }
        case FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_FAILED: {
            return {
                ...state,
                collectionIdToSearch: null,
                tracks: []
            }
        }

        default: {
            return state
        }
    }
}