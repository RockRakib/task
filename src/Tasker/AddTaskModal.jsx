import { useState } from "react";
import { toast } from "react-toastify";
import { useTasks } from "../context/Hooks";

/* eslint-disable react/prop-types */
const initialState = {
  title: "",
  description: "",
  tags: [],
  priority: "",
};
const AddTaskModal = ({ onCurrentTask, currentTask, onModalShow }) => {
  const [inputTasks, setInputTasks] = useState(currentTask || initialState);

  const handleTaskInputs = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "tags") value = value.split(",");
    setInputTasks({ ...inputTasks, [name]: value });
  };
  const { dispatch } = useTasks();
  function handleSubmit(e) {
    e.preventDefault();
    e.isPropagationStopped();

    const inputValues = Object.values(inputTasks);
    const isNotEmptyValues = inputValues.every((task) =>
      Boolean(String(task).trim())
    );
    if (isNotEmptyValues) {
      if (JSON.stringify(currentTask) === JSON.stringify(initialState)) {
        toast.warning(
          "Hmm, the task remains the same after the update attempt."
        );
      } else {
        const tags = inputTasks.tags.filter(Boolean);
        if (tags.length > 0) {
          dispatch({
            type: currentTask ? "update" : "add",
            payload: {
              ...inputTasks,
              tags: inputTasks.tags.filter(Boolean),
            },
          });
          toast.success(
            `Task successfully ${currentTask ? "updated" : "created"}.`
          );
          if (currentTask) {
            onCurrentTask(null);
          }
          onModalShow(false);
        } else {
          toast.error("Oops! It looks like you forgot to fill in valid tags");
        }
      }
    } else {
      toast.error(
        "Oops! It looks like you forgot to fill in some information."
      );
    }
  }
  const handleCloseModal = () => {
    // current task has then null

    if (currentTask) {
      onCurrentTask(null);
    }
    onModalShow(false);
  };

  return (
    <div className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 z-[102] absolute left-1/4 top-1/4 after:bg-black/45 after:w-full after:h-full after:fixed after:top-0 after:left-0 after:-z-[11]">
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11"
      >
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {currentTask ? "Update Task" : "Add New Task"}
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              onChange={handleTaskInputs}
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              value={inputTasks.title}
              id="title"
              required
            />
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              onChange={handleTaskInputs}
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              value={inputTasks.description}
              name="description"
              id="description"
              required
            ></textarea>
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                onChange={handleTaskInputs}
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                value={inputTasks.tags}
                name="tags"
                id="tags"
                required
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                onChange={handleTaskInputs}
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                value={inputTasks.priority}
                id="priority"
                required
              >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center lg:mt-20">
          <button
            type="button"
            className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80 mr-3"
            onClick={handleCloseModal}
          >
            cancel
          </button>
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            {currentTask ? "Update Task" : "Create new Task"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskModal;
