import React, {useEffect, useState} from 'react';
import {v1} from "uuid";
import {AddItemForm} from "./components/AddItemForm/AddItemForm";
import {Tasks} from "./components/Tasks/Tasks";
import {Tags} from "./components/HashTags/Tags";
import s from './App.module.scss'

export type StateType = {
    title: string,
    id: string,
}

export const App = () => {

    const [tasks, setTasks] = useState<StateType[]>(JSON.parse(localStorage.getItem('tasks')!) || [])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const handleAddTask = (title: string) => {
        setTasks([{title, id: v1()}, ...tasks])
    }
    const handleDeleteTask = (taskId: string) => {
        setTasks(tasks.filter(i => i.id !== taskId))
    }
    const handleChangeTaskTitle = (taskId: string, title: string) => {
        setTasks(tasks.map((i) => i.id === taskId ? {...i, title} : i))
    }
    const handleTagDelete = (tag: string) => {
        const newTasks = tasks.map((t) => {
            t.title = t.title.replace(tag, '')
            return t
        })
        setTasks(newTasks)
    }
    const handleChangeFilter = (tag: string) => {
        setFilter(tag)
    }
    let filteredTasks = tasks.filter((i) => i.title.includes(filter))

    if (filter === '') {
        filteredTasks = tasks
    }

    const tags = Array.from(new Set(tasks.map((i) =>
        i.title.split(' ').filter(text => text[0] === '#')).flat()))

    return <div className={s.container}>
        <h1>Note</h1>

        <AddItemForm
            onAddTask={handleAddTask}
        />

        <div className={s.wrapper}>
            <Tags
                filter={filter}
                tags={tags}
                onRemoveFilter={handleTagDelete}
                onSelectFilter={handleChangeFilter}
            />
        </div>
        <Tasks
            tasks={filteredTasks}
            onDeleteTask={handleDeleteTask}
            onChangeTaskTitle={handleChangeTaskTitle}
        />

    </div>
}

