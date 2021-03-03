import getAllNotes  from "../api/getAllNotes";
export const FETCH_NOTICES = 'FETCH_NOTICES'

export const fetchNotices = () => async (dispatch) => {
  const response = await getAllNotes();
  dispatch({
    type: FETCH_NOTICES,
    payload: response,
  });
};


