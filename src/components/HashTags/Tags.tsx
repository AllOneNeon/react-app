import React from "react";
import s from './Tags.module.scss'


type PropsType = {
    tags: string[]
    onRemoveFilter: (tag: string) => void
    onSelectFilter: (tag: string) => void
    filter: string
}
export const Tags = ({
                         tags,
                         onRemoveFilter,
                         onSelectFilter,
                         filter


                     }: PropsType) => {

    return <div className={s.container}>

        <div className={s.wrapper}>
            <div
                className={s.tag}
                onClick={() => onSelectFilter('')}
            >
                #all

            </div>

            {tags.map(
                (tag, index) =>
                    <div className={s.tagWrapper} key={index}>
                        <div
                            className={`${filter === tag ? s.activeTag : ''}`}
                            onClick={() => onSelectFilter(tag)}
                        >
                            {tag}

                        </div>
                        <button onClick={() => onRemoveFilter(tag)}>x</button>
                    </div>
            )}
        </div>
    </div>
}