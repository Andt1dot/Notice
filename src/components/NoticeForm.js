import React, { useEffect } from "react";

const initialState = {
  title: "",
  content: "",
  tags: "",
};

function NoticeForm({
  inputValues = initialState,
  onSubmitCallback,
  titlePage,
}) {
  const [value, setValue] = React.useState({ ...inputValues });

  const handleInputChange = (e) => {
    //e.target.name - returneaza numele inputului
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setValue(inputValues);
  }, [inputValues]);

  const onSubmit = (e) => {
    e.preventDefault();
    //apelam functia care a fost creata in CreateForm cu parametrul de un obiect de date
    onSubmitCallback(value);
  };

  return (
    <div className="login-box">
      <h1>{titlePage}</h1>
      <form>
        <div class="user-box">
          <input
            type="text"
            name="title"
            onChange={handleInputChange}
            value={value.title}
          />
          <label>Title:</label>
        </div>
        <div class="user-box">
          <input
            type="text"
            name="tags"
            onChange={handleInputChange}
            value={value.tags}
          />
          <label>Tags:</label>
        </div>
        <div class="user-box">
          <textarea
            name="content"
            onChange={handleInputChange}
            value={value.content}
          ></textarea>
          <label>Notice</label>
        </div>
        <a href="#" onClick={onSubmit}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Save Change
        </a>
      </form>
    </div>
  );
}
export default NoticeForm;
