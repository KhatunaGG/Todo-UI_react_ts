import React, { ChangeEvent } from 'react';
import Date from '../date/Date';
import Item from '../item/Item';

import {
  STodobodyDiv,
  STask,
  SAddtask,
  SInput,
  SSubmit,
  SGreenicon
} from './todostyled';

import { ITask } from '../../Interfaces';

interface Props {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  task: string;
  addTask: () => void;
  todoList: ITask[];
  deleteTask: (id: number) => void;
  completTask: (id: number) => void;
  formattedTime: string;
  formattedDay?: string; // You may need to adjust this based on your actual requirements
  formattedDate?: number; // You may need to adjust this based on your actual requirements
}

const Todo: React.FC<Props> = ({
  handleChange,
  task,
  addTask,
  todoList,
  deleteTask,
  completTask,
  formattedTime,
  formattedDay,
  formattedDate
}) => {
  return (
    <STodobodyDiv>
      <Date
        formattedTime={formattedTime}
        formattedDay={formattedDay}
        formattedDate={formattedDate}
      />
      <STask className="task">
        <SAddtask>
          <SGreenicon src="/assets/mark-icon.svg" alt="" />
          <SInput
            onChange={handleChange}
            name={task}
            value={task}
            type="text"
            placeholder="Note"
          />
          <SSubmit onClick={addTask}>+</SSubmit>
        </SAddtask>

        {todoList.map((task: ITask, i: number) => (
          <Item
            key={i}
            task={task}
            deleteTask={deleteTask}
            completTask={completTask}
          />
        ))}
      </STask>
    </STodobodyDiv>
  );
};

export default Todo;
