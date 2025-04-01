import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (text) => {
    setTasks([
      ...tasks,
      { id: Date.now(), text, completed: false }
    ]);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );

      return updatedTasks.sort((a, b) => a.completed - b.completed);
    });
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="container">
      <h2>ToDo List</h2>
      <TodoForm addTask={addTask} />
      <TodoList
        tasks={tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;