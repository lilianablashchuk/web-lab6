import React, { useState } from 'react';

function TodoForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Нове завдання"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit">Додати</button>
    </form>
  );
}

export default TodoForm;