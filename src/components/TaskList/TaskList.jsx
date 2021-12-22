import React from "react";
import Task from "../Task/Task";
import TaskAdd from "../TaskAdd/TaskAdd";

import styles from "./task-list.module.css";

class TaskList extends React.Component {
    state = {
        tasks: [
            {
                id: 0,
                name: 'Задача 1',
                description: 'Описание задачи 1',
                completed: false,
            },
            {
                id: 1,
                name: 'Задача 2 побольше',
                description: 'Описание задачи 2 побольше',
                completed: true,
            },
            {
                id: 2,
                name: 'Задача 3 ещё побольше, которая в теории может вылезти за границы контейнера задачи. Аааааааааааааааапааа',
                description: 'Описание задачи 3. Тоже объемное очень сильно объемное очень сильно объемное очень сильно объемное очень сильно объемное очень сильно объемное очень сильно объемное очень сильно объемное очень сильно объемное очень сильно объемное очень сильно объемное очень сильно объемное очень сильно объемное ',
                completed: false,
            },
            {
                id: 3,
                name: 'Задача 4',
                description: 'Описание задачи 4',
                completed: true,
            },
            {
                id: 4,
                name: 'Задача 5',
                description: 'Описание задачи 5',
                completed: false,
            },
            {
                id: 5,
                name: 'Задача 6',
                description: 'Описание задачи 6',
                completed: true,
            },
            {
                id: 6,
                name: 'Задача 7',
                description: 'Описание задачи 7',
                completed: true,
            },
        ],
    }

    addTask = (taskName, taskDescription) => {
        let newTask = {
            id: (this.state.tasks.length ? this.state.tasks[this.state.tasks.length - 1].id : -1) + 1,
            name: taskName,
            description: taskDescription,
            completed: false
        }

        this.setState(prevState => ({
            tasks: [...prevState.tasks, newTask],
        }));

        setTimeout(() => {
            const tasks = document.getElementById(`${styles.tasks}`);
            tasks.scroll(0, tasks.scrollHeight);
        }, 0);
    }

    deleteTask = (id) => {
        const newTasks = [...this.state.tasks];

        let i;
        for (i = 0; i < newTasks.length; i++) {
            if (newTasks[i].id === id) {
                break;
            }
        }

        newTasks.splice(i, 1);

        this.setState(prevState => ({
            tasks: newTasks,
        }));
    }

    toggleTaskCompleted = (id) => {
        const newTasks = [...this.state.tasks];

        let i;
        for (i = 0; i < newTasks.length; i++) {
            if (newTasks[i].id === id) {
                newTasks[i].completed = !newTasks[i].completed;
            }
        }

        this.setState(prevState => ({
            tasks: newTasks,
        }));
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.header}>Task List</div>

                <div id={styles.tasks}>
                    {this.state.tasks.length ?
                        (this.state.tasks.map(task =>
                            <Task
                                key={task.id}
                                task={task}
                                deleteTask={this.deleteTask}
                                onClick={() => { this.toggleTaskCompleted(task.id) }}
                            />
                        )) : (
                            <div className={styles.warning}>Add a new task!</div>
                        )
                    }
                </div>

                <TaskAdd addTask={this.addTask} />
            </div>
        );
    }
}

export default TaskList;