import React from "react";

const TodoItem = ({ item, deleteItem, editItem }) => {
  const [completed, setCompleted] = React.useState(item.completed);
  const [edit, setEdit] = React.useState(false);
  const [editData, setEditData] = React.useState(item.title);

  const handleEdit = () => {
    editItem(item.id, editData);
    setEdit(false);
  };
  return (
    <>
      <tr>
        {completed ? (
          <td>
            <s>{item.title}</s>
          </td>
        ) : (
          <td>{item.title} </td>
        )}
        <td>
          <button onClick={() => deleteItem(item.id)}>delete</button>
        </td>
        <td>
          <button onClick={() => setCompleted(!completed)}>Completed</button>
        </td>
        <td>
          <button onClick={() => setEdit(true)}>Edit</button>
          {edit && (
            <>
              <input
                type="text"
                value={editData}
                onChange={(e) => setEditData(e.target.value)}
              />
              <button onClick={handleEdit}>Done</button>
            </>
          )}
        </td>
      </tr>
    </>
  );
};
export default TodoItem;
