import getNote from "../api/getNote";
export const FETCH_NOTICES_BY_ID = "FETCH_NOTICES_BY_ID";

export const fetchNoticesById = (id) => async (dispatch) => {
  const response = await getNote(id);

  dispatch({
    type: FETCH_NOTICES_BY_ID,
    payload: response,
  });
};
