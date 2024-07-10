import { toast } from "react-toastify";

const Toast = ({value}) => {
  return toast.{value}("🦄 Wow so easy!", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: "Bounce",
  });
};

export default Toast;
