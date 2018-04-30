import {appState, AppStateTypes} from '../store/templates/appState'
import {
    CHANGE_ARTIST_ID, CHANGE_INPUT_VALUE, CLOSE_SEARCH, FETCH_ALBUMS_BY_ARTIST_ID_SUCCESSFUL,
    FETCH_ARTIST_BY_NAME, FETCH_ARTIST_BY_NAME_SUCCESSFUL
} from '../actions/actionTypes'

export default (state: AppStateTypes = appState, action) => {
    switch (action.type) {
        case CHANGE_INPUT_VALUE: {
            return {
                ...state,
                [action.key]: action.value
            }
        }

        case CHANGE_ARTIST_ID: {
            return {
                ...state,
                artistIdToSearch: action.artistId,
            }
        }
        case FETCH_ARTIST_BY_NAME: {
            return {
                ...state,
                showInvisibleFullScreen: true,
            }
        }
        case FETCH_ARTIST_BY_NAME_SUCCESSFUL : {
            return {
                ...state,
                lastSuccessfulArtistNameSearched: state.artistNameToSearch,
            }
        }
        case FETCH_ALBUMS_BY_ARTIST_ID_SUCCESSFUL: {
            return {
                ...state,
                showInvisibleFullScreen: false,
            }
        }
        case CLOSE_SEARCH: {
            return {
                ...state,
                showInvisibleFullScreen: false,
                artistNameToSearch: state.lastSuccessfulArtistNameSearched,
            }
        }

        default: {
            return state
        }
    }
}