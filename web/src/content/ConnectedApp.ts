import App from './App'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { AppStateTypes } from '../redux/store/templates/appState'
import { AlbumCollectionStateTypes } from '../redux/store/templates/albumCollectionState'
import {
    changeInputValue, chooseArtistToDisplay, closeSearch, fetchAlbumDetailsByCollectionId, fetchAlbumsByArtistId,
    fetchArtistsByName
} from '../redux/actions/index'
import {ArtistSearchTypes} from '../redux/store/templates/artistSearchState'

interface mapStateToPropsTypes {
    appState: AppStateTypes;
    albumCollection: AlbumCollectionStateTypes;
    albumTracks: AlbumCollectionStateTypes;
    artistSearch: ArtistSearchTypes;

}

const mapStateToProps = (state: mapStateToPropsTypes, ownProps) =>  {
    return {
        appState: state.appState,
        albumCollection: state.albumCollection,
        albumTracks: state.albumTracks,
        artistSearch: state.artistSearch,

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchAlbumsByArtistId: () => {
            dispatch(fetchAlbumsByArtistId())
        },
        fetchAlbumDetailsByCollectionIdRedirect: (collectionId: number, collectionName: string,) => (event: MouseEvent) => {
            dispatch(fetchAlbumDetailsByCollectionId(collectionId, collectionName, true))
        },
        fetchAlbumDetailsByCollectionIdNoRedirect: (collectionId: number, collectionName: string,) => (event: MouseEvent) => {
            dispatch(fetchAlbumDetailsByCollectionId(collectionId, collectionName, false))
        },
        closeSearch: () => {
            dispatch(closeSearch())
        },
        fetchArtistsByName: () => {
            dispatch(fetchArtistsByName())
        },
        chooseArtist: (artistId: number) => (event: MouseEvent) => {
            dispatch(chooseArtistToDisplay(artistId))
        },
        inputChange: (key, value) => {
            dispatch(changeInputValue(key, value))
        },
    }
}

const ConnectedSample = withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

export default ConnectedSample