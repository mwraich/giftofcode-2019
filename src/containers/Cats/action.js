import { getCats } from './util'
export const IMPORT_CATS_REQUEST = 'importCatsRequest'
export const IMPORT_CATS_SUCCESS_RESPONSE = 'importCatsSuccessResponse'
export const IMPORT_CATS_FAILURE_RESPONSE = 'importCatsFailureResponse'

function ImportCatsRequest() {
  return {
    type: IMPORT_CATS_REQUEST
  };
}

function CatsRequestSuccess(cats) {
  return {
    type: IMPORT_CATS_SUCCESS_RESPONSE,
    payload: { cats }
  };
}

function CatsRequestFailure(error) {
  return {
    type: IMPORT_CATS_FAILURE_RESPONSE,
    payload: error
  };
}

export function sendImportCatsRequest() {
  return async (dispatch) => {
    try {
      dispatch(ImportCatsRequest());

      const response = await getCats();

      dispatch(CatsRequestSuccess(response));
    } catch (error) {
      console.error(error);
      dispatch(CatsRequestFailure(error));
    }
  };
}