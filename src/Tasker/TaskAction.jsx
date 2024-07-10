import AddTaskModal from "./AddTaskModal";
import { useTasks } from "../context/Hooks";
import DeleteModal from "../utils/DeleteModal";
import { toast } from "react-toastify";
import { useState } from "react";

const TaskAction = () => {
  const { showModal, handleShowModal, tasks, dispatch } = useTasks();
  const [showDeleteModal, SetShowDeleteModal] = useState(false);
  const handleTasksDelete = () => {
    dispatch({
      type: "alldelete",
    });
    toast.success("succesfully All task deleted");
    SetShowDeleteModal(false);
  };

  return (
    <>
      {showModal && <AddTaskModal onModalShow={handleShowModal} />}
      {showDeleteModal && (
        <DeleteModal
          onShowDeleteModal={() => SetShowDeleteModal(false)}
          onDelete={handleTasksDelete}
          message={`Are You Sure Want To Delete all Tasks?`}
        />
      )}

      <button
        onClick={() => handleShowModal(true)}
        className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
      >
        Add Task
      </button>
      <button
        onClick={() => SetShowDeleteModal(true)}
        disabled={tasks?.length < 1}
        className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
      >
        Delete All
      </button>
    </>
  );
};

export default TaskAction;
