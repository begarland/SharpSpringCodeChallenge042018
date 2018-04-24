import {appState, AppStateTypes} from '../store/templates/appState'

import { LOCATION_CHANGE } from 'react-router-redux'
import {CHANGE_INPUT_VALUE} from '../actions/actionTypes'

export default (state: AppStateTypes = appState, action) => {
    switch (action.type) {
        case LOCATION_CHANGE: {
            return {
                ...state,

            }
        }

        default: {
            return state
        }
    }
}