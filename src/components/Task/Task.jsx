import css from './Task.module.css';

export default function Task({ data, onDelete, onEdit }) {
  //console.log(data);

  const handleEdit = () => {
    const newText = prompt('Edit task text:', data.text);
    if (newText) {
      onEdit({ ...data, text: newText });
    }
  };

  return (
    <div className={css.container}>
      <p className={css.text}>{data.text}</p>
      <button className={css.btn} onClick={() => onDelete(data.id)}>
        Delete
      </button>
      <button className={css.btn} onClick={handleEdit}>
        Edit
      </button>
    </div>
  );
}
