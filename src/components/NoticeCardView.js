import React, { useEffect, useState } from "react";

const initialState = {
  title: "",
  content: "",
  tags: "",
};

const NoticeCardView = ({ inputValues = initialState, onBackHome }) => {
  const [value, setValue] = useState({ ...inputValues });

  useEffect(() => {
    setValue(inputValues);
  }, [inputValues]);

  console.log(value);

  return (
    <div className="title-page">
      <h1>View Notice</h1>
      <div className="view-container">
        <div className="title-view">
          <h2>Title:</h2>
          <section className="section-title">{value.title}</section>
        </div>
        <div className="tags-view">
          <h2>Tags:</h2>
          <section>{value.tags[0]}</section>
        </div>
        <div className="title-content">
          <h2>Notice:</h2>
          <section className="content">{value.content}</section>
        </div>
        <div className="button-view">
          <button onClick={onBackHome}>Was read</button>
        </div>
      </div>
    </div>
  );
};

export default NoticeCardView;
