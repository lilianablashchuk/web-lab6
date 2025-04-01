import React from 'react';

function TodoItem({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <li>
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
        }}
      >
        {task.text}
      </span>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      <button onClick={() => deleteTask(task.id)}>Видалити</button>
    </li>
  );
}

export default TodoItem;