import { useState } from "react";

import styles from "./task-add.module.css";

function TaskAdd({ addTask }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleAddButton = () => {
        if (!name.trim()) {
            alert("You can't create the task without the name!")
            return;
        }

        addTask(name, description);

        setName("");
        document.getElementById("name").value = "";

        setDescription("");
        document.getElementById("description").value = "";
    }

    return (
        <div className={styles.container}>
            <input id="name" className={styles.input} type="text" placeholder="Name" onChange={(e) => { setName(e.target.value) }} />
            <input id="description" className={styles.input} type="text" placeholder="Description" onChange={(e) => { setDescription(e.target.value) }} />
            <button id={styles.addBtn} onClick={handleAddButton}>+</button>
        </div>
    );
}

export default TaskAdd;