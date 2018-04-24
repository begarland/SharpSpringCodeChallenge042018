import axios from 'axios';
import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { FETCH_ALBUMS_BY_ARTIST, FETCH_ALBUMS_BY_ARTIST_FAILED, FETCH_ALBUMS_BY_ARTIST_SUCCESSFUL } from '../actions/actionTypes';
const fetchArtistInformationEpic = (action$, store) => action$.pipe(ofType(FETCH_ALBUMS_BY_ARTIST), switchMap(() => axios.get(`https://itunes.apple.com/search?${store.getState().appState.artistToSearch}`)
    .then(response => {
    return ({ type: FETCH_ALBUMS_BY_ARTIST_SUCCESSFUL, artistInformation: response });
})
    .catch((error) => {
    console.error(error.message);
    return ({ type: FETCH_ALBUMS_BY_ARTIST_FAILED, error: error.message });
})));
export default fetchArtistInformationEpic;
//# sourceMappingURL=fetchAlbumsByArtist.js.map