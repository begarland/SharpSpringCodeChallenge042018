import { Rxios } from 'rxios'
import { ofType } from 'redux-observable'
import { switchMap } from 'rxjs/operators'
import {
    FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_NO_REDIRECT,
    FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_FAILED,
    FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_SUCCESSFUL
} from '../actions/actionTypes'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/catch'

const axios = new Rxios({})

const fetchAlbumDetailsByCollectionIdNoRedirect = (action$, store) =>
    action$.pipe(
        ofType(FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_NO_REDIRECT),
        switchMap(() =>
            Observable.from(
                axios.get(`https://itunes.apple.com/lookup?id=${store.getState().albumTracks.collectionIdToSearch}&entity=song`)
                    .mergeMap(response => Observable.of(
                        { type: FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_SUCCESSFUL, albumInformation: response } as any,
                    )).catch(error => Observable.of(
                    { type: FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_FAILED, error: error } as any
                ))
            )))


export default fetchAlbumDetailsByCollectionIdNoRedirect
