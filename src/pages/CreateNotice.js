import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { actionCreateNotice } from "../actions/actionCreateNotice";
import NoteForm from "../components/NoticeForm";

export default function CreateNotice() {
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmitCallback = (value) => {
    dispatch(actionCreateNotice(value)).then(() => {
      history.push("/");
    });
  };

  return (
    <div>
      <NoteForm
        onSubmitCallback={onSubmitCallback}
        titlePage={"Create notice"}
      />
    </div>
  );
}
