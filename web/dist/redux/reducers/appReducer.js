import { appState } from '../store/templates/appState';
import { LOCATION_CHANGE } from 'react-router-redux';
import { CHANGE_INPUT_VALUE, SLIDE_BOX, SPIN_LOGO_CHANGE, STOP_BOX } from '../actions/actionTypes';
export default (state = appState, action) => {
    switch (action.type) {
        case LOCATION_CHANGE: {
            return Object.assign({}, state, { showNavigateButton: action.payload.pathname === '/', moveBox: false });
        }
        case SLIDE_BOX: {
            return Object.assign({}, state, { moveBox: true });
        }
        case STOP_BOX: {
            return Object.assign({}, state, { moveBox: false });
        }
        case SPIN_LOGO_CHANGE: {
            return Object.assign({}, state, { spinLogo: action.spinChange });
        }
        case CHANGE_INPUT_VALUE: {
            return Object.assign({}, state, { inputs: Object.assign({}, state.inputs, { [action.key]: action.value }) });
        }
        default: {
            return state;
        }
    }
};
//# sourceMappingURL=appReducer.js.map