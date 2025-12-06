import css from './Task.module.css';

export default function Task({ data: { id, text }, onDelete, onEdit }) {
  console.log(id, text);

  const handleEdit = () => {
    const newText = prompt('Edit task text:', text);
    if (newText) {
      onEdit({ id: id, text: newText });
    }
  };

  return (
    <div className={css.container}>
      <p className={css.text}>{text}</p>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
      <button className={css.btn} onClick={handleEdit}>
        Edit
      </button>
    </div>
  );
}
