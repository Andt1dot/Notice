import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import "../style/Notice.css";
import { fetchNotices } from "../actions/actionGetAllNotice";
import { DeleteModal } from "../components/DeleteModal";

const initialState = {
  id: 0,
  selected: false,
};

const NoticeCard = () => {
  const [idElement, setIdElement] = useState(initialState);
  const dispatch = useDispatch();
  const notices = useSelector((state) => ({
    notice: state.notices,
  }));

  useEffect(() => {
    dispatch(fetchNotices());
  }, [dispatch]);

  if (notices.notice != null || !notices) {
    return notices.notice.map((el) => (
      <div
        className="card-notice"
        onClick={(e) => {
          setIdElement({ id: el.ref.value.id, selected: !idElement.selected });
          console.log(idElement);
        }}
      >
        <h3 className="title">{el.data.title}</h3>
        <h5 className="tags">{el.data.tags}</h5>
        <div className="content">
          <p>{el.data.content}</p>
        </div>
        {el.ref.value.id === idElement.id && idElement.selected === true ? (
          <div className="manage-notice">
            <Link to={`/view-notice/${idElement.id}`}>
              <button className="view-notice">
                <span>View</span>
              </button>
            </Link>
            <Link to={`/edit-notice/${idElement.id}`}>
              <button className="edit-notice">Edit</button>
            </Link>
            <Link to={`/delete-notice/${idElement.id}`}>
              <button className="delete-notice">Delete</button>
            </Link>
          </div>
        ) : null}
      </div>
    ));
  } else {
    return <div>Salut</div>;
  }
};
export default NoticeCard;
