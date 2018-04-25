import axios from 'axios'
import { ofType } from 'redux-observable'
import { switchMap } from 'rxjs/operators'
import {
    FETCH_ALBUM_DETAILS_BY_COLLECTION_ID,
    FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_FAILED,
    FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_SUCCESSFUL
} from '../actions/actionTypes'
import {push} from 'react-router-redux'

const fetchAlbumDetailsByCollectionId = (action$, store) =>
    action$.pipe(
        ofType(FETCH_ALBUM_DETAILS_BY_COLLECTION_ID),
        switchMap(() =>
            axios.get(`https://itunes.apple.com/lookup?id=${store.getState().albumTracks.collectionIdToSearch}&entity=song`)
                .then(response => {
                    console.log(response)
                    store.dispatch(push(`/${store.getState().albumTracks.collectionIdToSearch}`))
                    return ({type: FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_SUCCESSFUL, albumInformation: response.data})
                })
                .catch((error) => {
                    console.error(error.message)

                    return ({type: FETCH_ALBUM_DETAILS_BY_COLLECTION_ID_FAILED, error: error.message})

                })
        ))

export default fetchAlbumDetailsByCollectionId