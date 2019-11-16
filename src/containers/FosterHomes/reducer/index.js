import types from '../actions/types';

const defaultState = {
    isFetching: false,
    error: [],
    fosterHomes: []
};

export default function catReducer(state = defaultState, action) {
    switch(action.type) {
        case types.HANDLE_ERROR:
            return {
                ...state,
                error: action.error,
            }
        case types.REQUEST_FOSTER_HOMES:
            return {
                ...state,
                isFetching: true
            }
        case types.RECEIVE_FOSTER_HOMES:
                return {
                    ...state,
                    isFetching: false,
                    fosterHomes: action.fosterHomes
                }
        default:
            return state;
    }
}
