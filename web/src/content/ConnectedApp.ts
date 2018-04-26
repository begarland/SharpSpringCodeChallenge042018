import App from './App'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { AppStateTypes } from '../redux/store/templates/appState'
import { AlbumCollectionStateTypes } from '../redux/store/templates/albumCollectionState'
import { push } from 'react-router-redux'
import { changeInputValue, fetchAlbumDetailsByCollectionId, fetchAlbumsByArtist } from '../redux/actions/index'

interface mapStateToPropsTypes {
    appState: AppStateTypes;
    albumCollection: AlbumCollectionStateTypes;
    albumTracks: AlbumCollectionStateTypes;

}

const mapStateToProps = (state: mapStateToPropsTypes, ownProps) =>  {
    return {
        appState: state.appState,
        albumCollection: state.albumCollection,
        albumTracks: state.albumTracks,

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchAlbumsByArtist: () => {
            dispatch(fetchAlbumsByArtist())
        },
        fetchAlbumDetailsByCollectionId: (collectionId: number, collectionName: string,) => (event: MouseEvent) => {
            dispatch(fetchAlbumDetailsByCollectionId(collectionId, collectionName))
        },
        inputChange: (key, value) => {
            dispatch(changeInputValue(key, value))
        },
    }
}

const ConnectedSample = withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

export default ConnectedSample