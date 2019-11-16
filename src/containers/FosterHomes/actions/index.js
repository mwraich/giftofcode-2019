import {
    HANDLE_ERROR,
    RECEIVE_FOSTER_HOMES,
    REQUEST_FOSTER_HOMES,
} from './types'

export const requestFosterHomes = () => ({
    type: REQUEST_FOSTER_HOMES,
});

export const receivedFosterHomes = fosterHomes => ({
    type: RECEIVE_FOSTER_HOMES,
    fosterHomes,
});

export const handleError = error => ({
    type: HANDLE_ERROR,
    error,
})

export function fetchFosterHomes() {
    return function (dispatch) {

        dispatch(requestFosterHomes())

        return fetch(`http://cmsback-sxbbrr2s2a-uc.a.run.app/fosterhome`)
        .then(
            response => response.json(),
            error => dispatch(handleError(error)),
        )
        .then((data) => {
            dispatch(receivedFosterHomes(data.fosterHomes));
        });
    };
}
