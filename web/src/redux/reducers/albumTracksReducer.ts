import {albumTracks, AlbumTracksStateTypes} from '../store/templates/albumTracksState'
import {
    FETCH_ALBUM_DETAILS_BY_COLLECTION_ID, FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_FAILED,
    FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_SUCCESSFUL
} from '../actions/actionTypes'


export default (state: AlbumTracksStateTypes = albumTracks, action) => {
    switch (action.type) {
        case FETCH_ALBUM_DETAILS_BY_COLLECTION_ID: {
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