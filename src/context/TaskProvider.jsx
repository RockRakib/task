/* eslint-disable react/prop-types */
import { useReducer, useState } from "react";
import { TaskContext } from ".";
import { TaskReducer } from "../reducers/TaskReducer";
import { initialTasks } from "../data/data";

const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(TaskReducer, initialTasks, () => {
    const localData = localStorage.getItem("tasks");
    return localData ? JSON.parse(localData) : [];
  });
  const [searchValue, setSearchValue] = useState("");
  const [currentTask, setCurrenTask] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // localStorage

  // handlers
  const handleCurrentTask = (data) => setCurrenTask(data);
  const handleShowModal = (data) => setShowModal(data);
  const handleSearchValue = (e) => setSearchValue(e.target.value);
  const state = {
    tasks,
    dispatch,
    currentTask,
    handleCurrentTask,
    handleShowModal,
    showModal,
    searchValue,
    handleSearchValue,
  };
  return <TaskContext.Provider value={state}>{children}</TaskContext.Provider>;
};

export default TaskProvider;
