import TableData from "./TableData";
import { useTasks } from "../context/Hooks";
import { toast } from "react-toastify";
import TaskHeader from "./TaskHeader";
import AddTaskModal from "./AddTaskModal";

const TaskTable = () => {
  const {
    tasks,
    dispatch,
    currentTask,
    handleCurrentTask,
    handleShowModal,
    showModal,
  } = useTasks();
  function handleDelete(id) {
    toast.success("Deleted", {
      position: "bottom-right",
      autoClose: 1000,
      theme: "dark",
    });
    dispatch({
      type: "remove",
      payload: id,
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

                <tbody>
                  {tasks.map((task) => (
                    <TableData
                      key={task.id}
                      task={task}
                      onDelete={handleDelete}
                    />
                  ))}
                </tbody>
              </table>
              {tasks.length === 0 && (
                <h2 className="text-2xl  text-center font-semibold max-sm:mb-4">
                  Task List Empty
                </h2>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskTable;
