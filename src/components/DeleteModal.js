import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {deleteNotice} from "../actions/actionDeleteNotice";
import "../style/Notice.css";
import ReactDom from 'react-dom'

export const DeleteModal = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const onCancel = (e) => {
    history.push('/');
  };

  const onDelete = (e) => {
     dispatch(deleteNotice(id));
    history.push("/");
  };

  return ReactDom.createPortal (
    <div className="modal">
      <div className="modal-delete">
        <h1>Are you sure you want to delete the note?</h1>
        <div className="modal-manage">
          <button className="delete-yes" onClick={onDelete}>
            Yes
          </button>
          <button className="delete-cancel" onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal-delete')
  );
};
