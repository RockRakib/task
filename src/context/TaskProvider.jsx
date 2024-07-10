/* eslint-disable react/prop-types */
import { useReducer, useState } from "react";
import { TaskContext } from ".";
import { TaskReducer } from "../reducers/TaskReducer";
import { initialTasks } from "../data/data";

const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(TaskReducer, initialTasks);
  const [currentTask, setCurrenTask] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // handlers
  const handleCurrentTask = (data) => setCurrenTask(data);
  const handleShowModal = (data) => setShowModal(data);
  const state = {
    tasks,
    dispatch,
    currentTask,
    handleCurrentTask,
    handleShowModal,
    showModal,
  };
  return <TaskContext.Provider value={state}>{children}</TaskContext.Provider>;
};

export default TaskProvider;
