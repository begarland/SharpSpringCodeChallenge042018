import { Rxios } from 'rxios'
import { ofType } from 'redux-observable'
import { switchMap } from 'rxjs/operators'
import {push} from 'react-router-redux'
import {
    FETCH_ALBUM_DETAILS_BY_COLLECTION_ID,
    FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_FAILED,
    FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_SUCCESSFUL
} from '../actions/actionTypes'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/mergeMap'

const axios = new Rxios({})

const fetchAlbumDetailsByCollectionId = (action$, store) =>
    action$.pipe(
        ofType(FETCH_ALBUM_DETAILS_BY_COLLECTION_ID),
        switchMap(() =>
            Observable.from(
                axios.get(`https://itunes.apple.com/lookup?id=${store.getState().albumTracks.collectionIdToSearch}&entity=song`)
                    .mergeMap(response => Observable.of(
                        { type: FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_SUCCESSFUL, albumInformation: response },
                        push(`/album/${store.getState().albumTracks.collectionName}`)
                    ))
        )))


export default fetchAlbumDetailsByCollectionId



//axios.get(`https://itunes.apple.com/lookup?id=${store.getState().albumTracks.collectionIdToSearch}&entity=song`).subscribe(
  //  response => {
    //    return ({type: FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_SUCCESSFUL, albumInformation: response})},
    //(error) => {
      //  console.error(error.message)
        //return ({type: FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_FAILED, error: error})}