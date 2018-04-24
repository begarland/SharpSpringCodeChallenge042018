import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from './App';
import { changeInputValue, fetchAlbumsByArtist } from '../redux/actions/index';
const mapStateToProps = (state, ownProps) => {
    return {
        appState: state.appState
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchAlbumsByArtist: () => {
            dispatch(fetchAlbumsByArtist());
        },
        inputChange: (key, value) => {
            dispatch(changeInputValue(key, value));
        },
    };
};
const ConnectedSample = withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
export default ConnectedSample;
//# sourceMappingURL=ConnectedApp.js.map