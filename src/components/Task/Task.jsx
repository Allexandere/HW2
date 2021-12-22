import clsx from "clsx";

import styles from "./task.module.css";

function TodoTask({ task, deleteTask, onClick }) {
    const handleDelete = (e, id) => {
        e.stopPropagation();
        deleteTask(id);
    }

    return (
        <div className={clsx(styles.container, task.completed && styles.checked)} onClick={onClick} role="button">
            <div className={styles.name}>
                {task.name} {task.completed ? <span className={styles.confirmed}>&#9989;</span> : null}
            </div>
            <div className={styles.description}>{task.description}</div>

            <button className={styles.delete} onClick={(e) => { handleDelete(e, task.id); }}>-</button>
        </div>
    );
}

export default TodoTask;