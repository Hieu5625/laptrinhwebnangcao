import React, { useState } from 'react';
import { TaskList } from './Tasklist'
function ToDoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e) => {
      e.preventDefault();
      if (newTask.trim() !== '') {
          setTasks([...tasks, { task: newTask, completed: false }]);
          setNewTask('');
      }
  };

  const toggleTaskCompletion = (index) => {
      const updatedTasks = tasks.map((task, i) =>
          i === index ? { ...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
  };

  return (
      <div>
          <h1>To-Do List</h1>
          <form onSubmit={handleAddTask}>
              <input
                  type="text"
                  placeholder="Enter new task"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
              />
              <button type="submit">Add Task</button>
          </form>
          {}
          <TaskList
              tasks={tasks}
              toggleTaskCompletion={toggleTaskCompletion}
              deleteTask={deleteTask}
          />
      </div>
  );
}

export default ToDoApp;