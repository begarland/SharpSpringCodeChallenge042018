import {albumTracks, AlbumTracksStateTypes, TrackTypes} from '../store/templates/albumTracksState'
import {
    CHANGE_PLAY_STATUS,
    FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_FAILED,
    FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_NO_REDIRECT,
    FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_REDIRECT,
    FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_SUCCESSFUL, FETCH_ALBUMS_BY_ARTIST_ID,
} from '../actions/actionTypes'
import {LOCATION_CHANGE} from 'react-router-redux'


const getDefaultTrackState = (tracks) => tracks.map((track: TrackTypes) => {
        const newTrack = {...track}
        newTrack.isPlaying = false
        return newTrack
    })

export default (state: AlbumTracksStateTypes = albumTracks, action) => {
    switch (action.type) {
        case LOCATION_CHANGE: {

            return {
                ...state,
                tracks: getDefaultTrackState(state.tracks)
            }
        }
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
                tracks: getDefaultTrackState(state.tracks),
            }
        }
        case FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_SUCCESSFUL: {
            return {
                ...state,
                tracks: getDefaultTrackState(action.albumInformation.results)
            }
        }
        case FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_FAILED: {
            return {
                ...state,
                collectionIdToSearch: null,
                tracks: []
            }
        }
        case FETCH_ALBUMS_BY_ARTIST_ID: {
            return {
                ...state,
                collectionIdToSearch: null,
                tracks: []
            }
        }
        case CHANGE_PLAY_STATUS:{
            let isPlayingTrackStatusUpdate = state.tracks.map((track: TrackTypes) => {
                const newTrack = {...track}
                if (newTrack.trackNumber === action.trackNumber) {
                    newTrack.isPlaying = !track.isPlaying
                } else {
                    newTrack.isPlaying = false
                }
                return newTrack
            })
            return {
                ...state,
                tracks: isPlayingTrackStatusUpdate
            }
        }

        default: {
            return state
        }
    }
}