import axios from 'axios';
import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { FETCH_ARTIST_INFORMATION, FETCH_ARTIST_INFORMATION_FAILED, FETCH_ARTIST_INFORMATION_SUCCESSFUL } from '../actions/actionTypes';
const fetchArtistInformationEpic = (action$, store) => action$.pipe(ofType(FETCH_ARTIST_INFORMATION), switchMap(() => axios.get(`https://itunes.apple.com/search?${store.getState().appState.artistToSearch}`)
    .then(response => {
    return ({ type: FETCH_ARTIST_INFORMATION_SUCCESSFUL, artistInformation: response });
})
    .catch((error) => {
    console.error(error.message);
    return ({ type: FETCH_ARTIST_INFORMATION_FAILED, error: error.message });
})));
export default fetchArtistInformationEpic;
//# sourceMappingURL=fetchiTunesInformation.js.map