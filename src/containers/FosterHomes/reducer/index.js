import types from '../actions/types';

const defaultState = {
  cats: []
};

export default function catReducer(state = defaultState, action) {
    switch(action.type) {
        default:
            return state;
    }
}
