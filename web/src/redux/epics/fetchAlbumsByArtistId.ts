import { ofType } from 'redux-observable'
import { switchMap } from 'rxjs/operators'
import { Rxios } from 'rxios'
import { push } from 'react-router-redux'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/catch'

const axios = new Rxios({})
import {
    FETCH_ALBUMS_BY_ARTIST_ID,
    FETCH_ALBUMS_BY_ARTIST_ID_FAILED,
    FETCH_ALBUMS_BY_ARTIST_ID_SUCCESSFUL
} from '../actions/actionTypes'

const fetchAlbumsByArtistId = (action$, store) =>
    action$.pipe(
        ofType(FETCH_ALBUMS_BY_ARTIST_ID),
        switchMap(() =>
            Observable.from(
                axios.get(`https://itunes.apple.com/lookup?id=${store.getState().appState.artistIdToSearch}&entity=album`)
                    .mergeMap(response => Observable.of(
                        { type: FETCH_ALBUMS_BY_ARTIST_ID_SUCCESSFUL, artistInformation: response } as any,
                    )).catch(error => Observable.of(
                    { type: FETCH_ALBUMS_BY_ARTIST_ID_FAILED, error: error.message } as any
                ))
            )))

export default fetchAlbumsByArtistId
