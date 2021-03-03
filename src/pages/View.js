import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import "../style/viewNotice.css";
import { fetchNoticesById } from "../actions/actionGetByIdNotices";
import { useDispatch, useSelector } from "react-redux";
import NoticeCardView from "../components/NoticeCardView";

function View() {
  const history = useHistory();
  const dispatch = useDispatch();
  const notice = useSelector((state) => state.selectedNote);
  const { id } = useParams();

  console.log("ID", id);

  const onBackHome = (e) => {
    history.push("/");
  };

  useEffect(() => {
    dispatch(fetchNoticesById(id));
  }, [dispatch, id]);

  return (notice? <NoticeCardView onBackHome={onBackHome} inputValues = {notice.data}/>:null);
}

export default View;
