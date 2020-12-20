import React from "react";
import { millisecondsToHuman } from "../../utils/TimerUtils";
import Button from "../Button";
import "./styles.css";

const Timer = ({ timer, onEdit, onDelete, onToggle }) => {
  const { isRunning, title, project, elapsed = 0 } = timer;

  return (
    <div className="timer">
      <p className="timer__title">{title}</p>
      <p className="timer__project">{project}</p>

      <p className="timer__time">{millisecondsToHuman(elapsed)}</p>

      <div className="timer__button-group">
        <Button variant="warning" title="Edit" onClick={onEdit} />
        <Button variant="danger" title="Remove" onClick={onDelete} />
      </div>

      <Button
        isFull
        variant={isRunning ? "danger" : "primary"}
        title={isRunning ? "Stop" : "Start"}
        onClick={onToggle}
      />
    </div>
  );
};

export default Timer;
