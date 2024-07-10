import AddTaskModal from "./AddTaskModal";
import { useTasks } from "../context/Hooks";

const TaskAction = () => {
  const { showModal, handleShowModal } = useTasks();

  return (
    <>
      {showModal && <AddTaskModal onModalShow={handleShowModal} />}

      <button
        onClick={() => handleShowModal(true)}
        className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
      >
        Add Task
      </button>
      <button className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold">
        Delete All
      </button>
    </>
  );
};

export default TaskAction;
