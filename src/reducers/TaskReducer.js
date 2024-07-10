export const TaskReducer = (state, action) => {
  let updatedState;
  switch (action.type) {
    case "add":
      updatedState = [
        ...state,
        {
          ...action.payload,
          id: crypto.randomUUID(),
          favorite: false,
        },
      ];
      break;
    case "remove":
      updatedState = state.filter((item) => item.id !== action.payload);
      break;
    case "update":
      updatedState = state.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      break;
    case "Alldelete":
      return [];

    default:
      return state;
  }
  // Save the updated state to local storage
  localStorage.setItem("tasks", JSON.stringify(updatedState));
  return updatedState;
};
