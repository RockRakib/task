import { ToastContainer } from "react-toastify";
import TaskProvider from "./context/TaskProvider";
import Page from "./Page";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <TaskProvider>
      <Page />
      <ToastContainer />
    </TaskProvider>
  );
};

export default App;
