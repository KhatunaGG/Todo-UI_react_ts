import React, { useState } from 'react'
import Date from '../date/Date'
import Item from '../item/Item'

import { STodobodyDiv, STask, SAddtask, SInput, SSubmit, SGreenicon } from './todostyled'
    

import { ITask } from '../../Interfaces'

interface Props {
    task: ITask;
    handleChange: void;
    addTask: void;
    todoList: ITask[];
    deleteTask: void;
    completTask: void;
    formattedTime: string;
}

const Todo = ({ handleChange, task, addTask, todoList, deleteTask, completTask, formattedTime, formattedDay, formattedDate }: Props) => {
    return (
        <STodobodyDiv>
            <Date formattedTime={formattedTime} formattedDay={formattedDay} formattedDate={formattedDate} />
            <STask className="task">
                <SAddtask>
                    <SGreenicon src="/assets/mark-icon.svg" alt="" />
                    <SInput onChange={handleChange} name={task} value={task} type="text" placeholder='Note' />
                    <SSubmit onClick={addTask}>+</SSubmit>
                </SAddtask>

                {todoList.map((task: ITask, i: number) => {
                    return (
                        <Item
                            key={i}
                            task={task}
                            deleteTask={deleteTask}
                            completTask={completTask}
                        />
                    )
                })}
            </STask>
        </STodobodyDiv>
    )
}

export default Todo