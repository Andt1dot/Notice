import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "../style/editNotice.css";
import { fetchNoticesById } from "../actions/actionGetByIdNotices";
import NoticeForm from "../components/NoticeForm";
import actionEditNotice from "../actions/actionEditNotice";

const EditNotice = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const notice = useSelector((state) => state.selectedNote);

  const onSubmitCallback = (notice) => {
    console.log('onSubmitCallback',notice);
    dispatch(actionEditNotice(id, notice));
    history.push("/");
  };

  useEffect(() => {
    dispatch(fetchNoticesById(id));
  }, [dispatch, id]);

  if (!notice) {
    return null;
  }
  return (
    <NoticeForm inputValues={notice.data} onSubmitCallback={onSubmitCallback} titlePage ={'Edit Notice'} />
  );
};

export default EditNotice;
