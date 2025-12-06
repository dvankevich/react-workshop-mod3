import TaskList from '../TaskList/TaskList';
import initialTasks from '../../tasks.json';
import Form from '../Form/Form';
import Filter from '../Filter/Filter';
import css from './App.module.css';
import { useEffect, useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : initialTasks;
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const [filter, setFilter] = useState('');

  const addTask = newTask => {
    setTasks(prevTasks => {
      return [...prevTasks, newTask];
    });
  };

  // const deleteTask = taskId => {
  //   setTasks(prevTasks => {
  //     return prevTasks.filter(task => task.id !== taskId);
  //   });
  // };
  const deleteTask = taskId => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this task?'
    );

    if (confirmed) {
      setTasks(prevTasks => {
        return prevTasks.filter(task => task.id !== taskId);
      });
    }
  };

  const visibleTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <Form onAdd={addTask} />
      <Filter value={filter} onFilter={setFilter} />
      <TaskList tasks={visibleTasks} onDelete={deleteTask} />
    </div>
  );
}
