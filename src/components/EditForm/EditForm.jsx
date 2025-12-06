import { useState, useEffect } from 'react';
import css from './YourStyles.module.css'; // Імпортуйте ваші стилі, якщо потрібно

export default function EditForm({ existingTask, onEdit }) {
  const [text, setText] = useState('');

  useEffect(() => {
    if (existingTask) {
      setText(existingTask.text);
    }
  }, [existingTask]);

  const handleSubmit = e => {
    e.preventDefault();
    onEdit({
      ...existingTask,
      text: text,
    });
    setText(''); // Скидаємо текст після редагування
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">Edit task</button>
    </form>
  );
}
