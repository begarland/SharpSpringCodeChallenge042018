import {albumCollection, AlbumCollectionStateTypes} from '../store/templates/albumCollectionState'
import {FETCH_ALBUMS_BY_ARTIST_ID_SUCCESSFUL, FETCH_ALBUMS_BY_ARTIST_ID} from '../actions/actionTypes'

export default (state: AlbumCollectionStateTypes = albumCollection, action) => {
    switch (action.type) {
        case FETCH_ALBUMS_BY_ARTIST_ID_SUCCESSFUL: {
            return {
                ...state,
                albums: action.artistInformation.results,
            }
        }
        case FETCH_ALBUMS_BY_ARTIST_ID: {
            return {
                ...state,
                albums: [],
            }
        }

        default: {
            return state
        }
    }
}