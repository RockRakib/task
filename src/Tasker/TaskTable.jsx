import TableData from "./TableData";
import { useTasks } from "../context/Hooks";

import TaskHeader from "./TaskHeader";
import AddTaskModal from "./AddTaskModal";
import { useState } from "react";
import { toast } from "react-toastify";
// import DeleteModal from "../utils/DeleteModal";

const TaskTable = () => {
  const {
    tasks,
    dispatch,
    currentTask,
    handleCurrentTask,
    handleShowModal,
    showModal,
    searchValue,
  } = useTasks();
  let content = null;
  const [showDeleteModal, SetShowDeleteModal] = useState(false);
  const handleShowDeleteModal = () => {
    handleCurrentTask(null);
    SetShowDeleteModal(false);
  };
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  if (filteredTasks.length > 0) {
    content = filteredTasks?.map((task) => (
      <TableData
        onDelete={handleDelete}
        showDeleteModal={showDeleteModal}
        SetShowDeleteModal={SetShowDeleteModal}
        OnShow={showDeleteModal}
        onShowDeleteModal={handleShowDeleteModal}
        key={task.id}
        task={task}
      />
    ));
  }
  function handleDelete(id) {
    dispatch({
      type: "remove",
      payload: id,
    });
    handleCurrentTask(null); // Clear selected task
    SetShowDeleteModal(false);
    toast.success("Deleted", {
      position: "bottom-right",
      autoClose: 1000,
      theme: "dark",
    });
  }
  return (
    <>
      <section className="mb-20" id="tasks">
        <div className="container">
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskHeader />
            {showModal && (
              <AddTaskModal
                onModalShow={handleShowModal}
                currentTask={currentTask}
                onCurrentTask={handleCurrentTask}
              />
            )}
            <div className="overflow-auto">
              <table className="table-fixed overflow-auto xl:w-full">
                <thead>
                  <tr>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                      {" "}
                      Title{" "}
                    </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
                      {" "}
                      Description{" "}
                    </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                      {" "}
                      Tags{" "}
                    </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                      {" "}
                      Priority{" "}
                    </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                      {" "}
                      Options{" "}
                    </th>
                  </tr>
                </thead>

                <tbody>{content}</tbody>
              </table>
              {tasks?.length === 0 ||
                (!tasks && (
                  <h2 className="text-2xl  text-center font-semibold max-sm:mb-4">
                    Task List Empty
                  </h2>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskTable;
