import {albumCollection, AlbumCollectionStateTypes} from '../store/templates/albumCollectionState'
import {FETCH_ALBUMS_BY_ARTIST_SUCCESSFUL} from '../actions/actionTypes'

export default (state: AlbumCollectionStateTypes = albumCollection, action) => {
    switch (action.type) {
        case FETCH_ALBUMS_BY_ARTIST_SUCCESSFUL: {
            return {
                ...state,
                albums: action.artistInformation.results
            }
        }

        default: {
            return state
        }
    }
}