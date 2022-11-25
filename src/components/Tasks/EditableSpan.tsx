import {ChangeEvent, useEffect, useState} from "react";
import s from './EditableSpan.module.scss'

type PropsType = {
    title: string
    taskId: string
    onChange: (taskId: string, newTitle: string) => void

}
export const EditableSpan = ({
                                 title,
                                 onChange,
                                 taskId,

                             }: PropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [text, setText] = useState(title)
    useEffect(() => {
        setText(title)
    }, [title])

    const handleTaskTitleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value)
    }
    const handleEditModeChange = () => {
        setEditMode(true)
    }

    const disableEditMode = () => {
        setEditMode(false)
        onChange(taskId, text)
    }

    return <div onDoubleClick={handleEditModeChange} className={s.container}>
        {
            editMode
                ? <textarea
                    value={text}
                    autoFocus={true}
                    onBlur={disableEditMode}
                    onChange={handleTaskTitleChange}
                />

                : <span>{text}</span>
        }
    </div>
}
