import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const contextClass = {
    success: "bg-blue-600 text-white",
    error: "bg-red-600 text-white font-white",
    info: "bg-gray-600",
    warning: "bg-orange-400",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300",
};

export  default function ToastNotification(message = 'Default', type = 'eror'){
    toast(message, {type: type,  progressClassName: 'fancy-progress-bar'})
    return (
        <ToastContainer  
        toastClassName={({ type }) => contextClass[type || "default"] + 
          " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
          }
          bodyClassName={() => "text-sm font-white font-med block p-3"}
          position="bottom-left"
          autoClose={3000} />
    );
}