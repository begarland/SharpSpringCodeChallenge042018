import {artistSearch, ArtistSearchTypes} from '../store/templates/artistSearchState'
import {
    CLOSE_SEARCH,
    FETCH_ALBUMS_BY_ARTIST_ID_SUCCESSFUL,
    FETCH_ARTIST_BY_NAME, FETCH_ARTIST_BY_NAME_FAILED,
    FETCH_ARTIST_BY_NAME_SUCCESSFUL
} from '../actions/actionTypes'

export default (state: ArtistSearchTypes = artistSearch, action) => {
    switch (action.type) {
        case FETCH_ARTIST_BY_NAME: {
            return {
                ...state,
                spinner: true,
            }
        }
        case FETCH_ARTIST_BY_NAME_SUCCESSFUL: {
            return {
                ...state,
                artists: action.artists.results,
                notFound: action.artists.results.length === 0,
                spinner: false,
            }
        }
        case FETCH_ARTIST_BY_NAME_FAILED: {
            return {
                ...state,
                artists: artistSearch.artists,
                notFound: false,
                spinner: false,
            }
        }
        case FETCH_ALBUMS_BY_ARTIST_ID_SUCCESSFUL: {
            return {
                ...state,
                artists: [],
                notFound: null,
            }
        }
        case CLOSE_SEARCH: {
            return {
                ...state,
                artists: [],
                notFound: null,
                spinner: false,
            }
        }
        default: {
            return state
        }
    }
}