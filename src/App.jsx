import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

import ToggleableTimerForm from "./component/ToggleableTimerForm";
import EditableTimer from "./component/EditableTimer";
import { newTimer } from "./utils/TimerUtils";
import Image from './assets/timer.jpg';
import "./App.css";

const ONE_SEC = 1000;

const App = () => {
  const [timers, setTimers] = useState([
    {
      id: uuidv4(),
      title: "Learn React",
      project: "Internship",
      elapsed: 0,
      isRunning: true,
    },
    {
      id: uuidv4(),
      title: "React session 2",
      project: "Internship",
      elapsed: 0,
      isRunning: false,
    },
  ]);

  // useEffect combine with timeOut will make a infinity loop to increase time
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimers(
        timers.map((timer) => ({
          ...timer,
          elapsed: timer.isRunning ? timer.elapsed + ONE_SEC : timer.elapsed,
        }))
      );
    }, ONE_SEC);

    return () => clearTimeout(timeout);
  }, [timers]);

  // There are many way to add new element to array, here we use SPREAD in ES6
  const handleCreateForm = (timer) => {
    setTimers([newTimer(timer), ...timers]);
  };

  // And there are many to clone an object, here we also use SPREAD, but it can cause bug.
  // Research about shallow copy & deep copy to know more
  const handleUpdateForm = (timer) => {
    setTimers(
      timers.map((item) => {
        if (item.id === timer.id)
          return {
            ...item,
            title: timer.title,
            project: timer.project,
          };

        return item;
      })
    );
  };
  const handleDelete = (timer) => {
    const timerId = timer.id;
    setTimers(timers.filter(timer => timer.id !== timerId))
  }

  const handleToggle = (timer) => {
    console.log(timer.isRunning)
    timer.isRunning = !timer.isRunning
    console.log(timer.isRunning)
  }

  return (
    <div className="app">
      <img src={Image} alt="timer" ></img>
      <p className="app__title">Timers</p>

      <div className="app__body">
        <ToggleableTimerForm isOpen={false} onSubmit={handleCreateForm} />

        {timers.map((timer) => (
          <EditableTimer key={timer.id}  onSubmit={handleUpdateForm} onToggle={() => handleToggle(timer)} onDelete={() => handleDelete(timer)} timer={timer} />
        ))}
      </div>
    </div>
  );
};

export default App;
