import { Rxios } from 'rxios'
import { ofType } from 'redux-observable'
import { switchMap } from 'rxjs/operators'
import { push } from 'react-router-redux'
import {
    FETCH_ARTIST_BY_NAME,
    FETCH_ARTIST_BY_NAME_FAILED,
    FETCH_ARTIST_BY_NAME_SUCCESSFUL
} from '../actions/actionTypes'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/catch'

const axios = new Rxios({})

const fetchAlbumDetailsByCollectionId = (action$, store) =>
    action$.pipe(
        ofType(FETCH_ARTIST_BY_NAME),
        switchMap(() =>
            Observable.from(
                axios.get(`https://itunes.apple.com/lookup?term=${store.getState().appState.artistNameToSearch}&entity=musicArtist`)
                    .mergeMap(response => Observable.of(
                        { type: FETCH_ARTIST_BY_NAME_SUCCESSFUL, artists: response } as any,
                        push(`/album/${store.getState().albumTracks.collectionName}`),
                    )).catch(error => Observable.of(
                    { type: FETCH_ARTIST_BY_NAME_FAILED, error: error } as any
                ))
            )))


export default fetchAlbumDetailsByCollectionId
