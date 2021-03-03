import { FETCH_NOTICES } from "../actions/actionGetAllNotice";
import { FETCH_NOTICES_BY_ID } from "../actions/actionGetByIdNotices";
import { CREATE_NOTE } from "../actions/actionCreateNotice";
import { EDIT_NOTICE } from "../actions/actionEditNotice";
import { DELETE_NOTICE } from "../actions/actionDeleteNotice";

const initialState = {
  notices: [],
  error: "",
  selectedNote: undefined,
};

const homeNotice = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTICES:
      return { ...state, notices: action.payload };
    case FETCH_NOTICES_BY_ID:
      return { ...state, selectedNote: action.payload };
    case CREATE_NOTE:
      return { ...state.notices, notices: action.payload };
    case EDIT_NOTICE:
      return {
        ...state,
        notices: state.notices.map((notice) => {
          if (notice.ref.value.id === action.payload.ref.value.id) {
            console.log("a intrat si va edita", notice);
            return action.payload;
          }
          return notice;
        }),
      };
    case DELETE_NOTICE:
      return {
        ...state,
        notices: state.notices.filter(
          (notice) => notice.ref.value.id !== action.payload.ref.value.id
        ),
      };

    default:
      return state;
  }
};

export default homeNotice;
