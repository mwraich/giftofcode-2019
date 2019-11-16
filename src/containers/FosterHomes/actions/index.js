import types from './types'

export const requestFosterHomes = () => ({
    type: types.REQUEST_FOSTER_HOMES,
});

export const receivedFosterHomes = fosterHomes => ({
    type: types.RECEIVE_FOSTER_HOMES,
    fosterHomes,
});

export const handleError = error => ({
    type: types.HANDLE_ERROR,
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
            console.log(data),
            dispatch(receivedFosterHomes(data.fosterHomes));
        });
    };
}
