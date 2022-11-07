//get the data parameter here, and you can store it in a local useState.
import { useState } from "react";

export const useTodos = (initialData = ["Task100"]) => {
  const [data, setMydata] = useState(initialData);
  const addData = (payload) => {
  
    setMydata([...data, payload]);
  };

  const clearData = () => {
    return setMydata([]);
  };

  const removeByIndex = (id) => {
    let a = data.filter((el, ind) => {
    return  ind !== id;
    });

    setMydata(a);
  };

  return {
    // data,
    data,
    addData,
    clearData,
    removeDataByIndex: removeByIndex,
  };
};
