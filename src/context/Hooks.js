import { useContext } from "react";
import { TaskContext } from ".";

export const useTasks = () => {
  return useContext(TaskContext);
};
