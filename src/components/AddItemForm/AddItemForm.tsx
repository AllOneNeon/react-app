import {ChangeEvent, useState} from "react";
import s from './AddItemForm.module.scss'

type PropsType = {
    onAddTask: (title: string) => void
}

export const AddItemForm = ({onAddTask}: PropsType) => {

    const [title, setTitle] = useState<string>('')

    const handleAddTask = () => {
        onAddTask(title)
        setTitle('')
    }
    const handleSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return <div className={s.container}>

        <input
            placeholder='Добавьте Заметку'
            value={title}
            onChange={handleSetTitle}
            type='text'
        />

        <button onClick={handleAddTask}>addNote</button>
    </div>
}
