import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;