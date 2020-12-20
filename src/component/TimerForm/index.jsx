import React, { useState } from "react";
import Button from "../Button";


const TimerForm = ({ timer = {}, onSubmit, onClose }) => {
  const { id, project, title } = timer;
  const [data, setData] = useState({
    title: id ? title : "",
    project: id ? project : "",
  });

  const handleDataChange = (event) => {
    setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = () => {
    const { title, project } = data;

    onSubmit({
      id,
      title,
      project,
    });
  };

  const submitText = id ? "Update" : "Create";

  return (
    <form className="timer">
      <label htmlFor={`title-${id}`}>Title</label>
      <input
        type="text"
        id={`title-${id}`}
        name="title"
        value={data.title}
        placeholder="Enter Title"
        onChange={handleDataChange}
      />
      <label htmlFor={`project-${id}`}>Project</label>
      <input
        type="text"
        id={`project-${id}`}
        name="project"
        value={data.project}
        placeholder="Enter Project"
        onChange={handleDataChange}
      />

      <div className="timer__button-group">
        <Button variant="warning" title="Cancel" onClick={onClose} />
        <Button title={submitText} onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default TimerForm;
