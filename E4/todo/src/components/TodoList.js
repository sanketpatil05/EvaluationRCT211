import React from "react";
import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";
const TodoList = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const deleteItem = (id) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        const newData = data.filter((item) => item.id !== id);
        setData(newData);
      }
    });
  };
  const addItem = (title) => {
    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title, completed: false }),
    })
      .then((res) => res.json())
      .then((data1) => {
        setData([...data, data1]);
      });
  };
  const editItem = (id, editData) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: editData, completed: false }),
    })
      .then((res) => res.json())
      .then((data1) => {
        const newData = data.map((item) => {
          if (item.id === id) {
            return { ...item, title: editData };
          }
          return item;
        });
        setData(newData);
      });
  };

  return (
    <>
      <center>
        <label htmlFor="add">Add Item</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => addItem(input)}>Add</button>
      </center>

      <table style={{ display: "inline" }}>
        <center>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Completed</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <TodoItem
                key={item.id}
                item={item}
                deleteItem={deleteItem}
                editItem={editItem}
              />
            ))}
          </tbody>
        </center>
      </table>
    </>
  );
};
export default TodoList;
