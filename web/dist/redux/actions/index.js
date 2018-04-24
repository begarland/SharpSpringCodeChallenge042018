import { CHANGE_INPUT_VALUE, FETCH_ALBUMS_BY_ARTIST } from './actionTypes';
export const changeInputValue = (key, value) => {
    return ({ type: CHANGE_INPUT_VALUE, key, value });
};
export const fetchAlbumsByArtist = () => {
    return ({ type: FETCH_ALBUMS_BY_ARTIST });
};
//# sourceMappingURL=index.js.map