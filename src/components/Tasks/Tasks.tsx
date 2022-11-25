import {StateType} from "../../App";
import {EditableSpan} from "./EditableSpan";
import s from './Tasks.module.scss'

type PropsType = {
    tasks: StateType[]
    onDeleteTask: (taskId: string) => void
    onChangeTaskTitle: (taskId: string, newTitle: string) => void
}
export const Tasks = ({
                          tasks,
                          onDeleteTask,
                          onChangeTaskTitle,


                      }: PropsType) => {


    return <ul className={s.container}>
        {
            tasks.map(
                (i) => {

                    return <li key={i.id} >

                        <EditableSpan
                            title={i.title}
                            taskId={i.id}
                            onChange={onChangeTaskTitle}

                        />

                        <button onClick={() => onDeleteTask(i.id)}>delete</button>
                    </li>
                })
        }
    </ul>
}
