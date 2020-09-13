import React from 'react'
import  {toast} from 'react-toastify';



const options = {
    autoClose: 3500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true
  };

export const toastSuccess = (msg) => {
    return toast.success(msg, options);
};

export const toastError = (msg) => {
      return toast.error(msg, options);
  };