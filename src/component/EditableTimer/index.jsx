import React, { useState } from 'react';
import Timer from '../Timer';
import TimerForm from '../TimerForm';

const EditableTimer = ({ timer, onSubmit, onDelete, onToggle }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleCloseForm = () => {
    setIsEdit(false);
  };

  const handleOpenForm = () => {
    setIsEdit(true);
  };

  const handleSubmitForm = (timer) => {
    onSubmit(timer);
    handleCloseForm();
  };

  if (isEdit)
    return (
      <TimerForm
        onClose={handleCloseForm}
        onSubmit={handleSubmitForm}
        timer={timer}
      />
    );

  return (
    <Timer
      onEdit={handleOpenForm}
      onDelete={onDelete}
      onToggle={onToggle}
      timer={timer}
    />
  );
};

export default EditableTimer;
