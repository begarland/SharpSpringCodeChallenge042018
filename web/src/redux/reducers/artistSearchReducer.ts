import {artistSearch, ArtistSearchTypes} from '../store/templates/artistSearchState'

export default (state: ArtistSearchTypes = artistSearch, action) => {
    switch (action.type) {


        default: {
            return state
        }
    }
}