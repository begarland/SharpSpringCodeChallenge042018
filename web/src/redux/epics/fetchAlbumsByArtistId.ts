import axios from 'axios'
import { ofType } from 'redux-observable'
import { switchMap } from 'rxjs/operators'
import {
    FETCH_ALBUMS_BY_ARTIST_ID,
    FETCH_ALBUMS_BY_ARTIST_ID_FAILED,
    FETCH_ALBUMS_BY_ARTIST_ID_SUCCESSFUL
} from '../actions/actionTypes'

const fetchAlbumsByArtistId = (action$, store) =>
    action$.pipe(
        ofType(FETCH_ALBUMS_BY_ARTIST_ID),
        switchMap(() =>
            axios.get(`https://itunes.apple.com/lookup?id=${store.getState().appState.artistIdToSearch}&entity=album`)
                .then(response => {
                    return ({type: FETCH_ALBUMS_BY_ARTIST_ID_SUCCESSFUL, artistInformation: response.data})
                })
                .catch((error) => {
                    console.error(error.message)

                    return ({type: FETCH_ALBUMS_BY_ARTIST_ID_FAILED, error: error.message})

                })
        ))

export default fetchAlbumsByArtistId