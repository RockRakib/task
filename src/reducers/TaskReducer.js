export const TaskReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          ...action.payload,
          id: crypto.randomUUID(),
          favorite: false,
        },
      ];
    case "remove":
      return state.filter((item) => item.id !== action.payload);
    case "update":
      return state.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );

    default:
      break;
  }
};
