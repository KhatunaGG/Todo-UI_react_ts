import { useEffect, useRef } from 'react'


import {
    STaskitem, SDetails, SEdit, STasklist, SItemtext, SItemtime, SCircleicon, SDeleteicon, SCompleted, SDelete
} from './styleditem'



const Item = ({task, deleteTask, completTask} : any) => {

    const publishedTimeRef = useRef<string | undefined>();

useEffect(() => {
  if (!publishedTimeRef.current) {
    const publishedTime = new Date().toLocaleString();
    publishedTimeRef.current = publishedTime;
  }
}, []);

    return (
        <STasklist className="tasklist">
            <STaskitem className="taskitem">
                <SDetails>
                    <SItemtext className="itemtext">{task.taskName}</SItemtext>
                    <SItemtime className="itemtime">{publishedTimeRef.current}</SItemtime>
                </SDetails>

                <SEdit className="edit">
                    <SCompleted onClick={() => completTask(task.id)} className="completed">
                        <SCircleicon src={task.completed ? "/assets/mark-icon.svg" : "/assets/icon.svg"} alt="icon" />
                    </SCompleted>
                    <SDelete onClick={() => deleteTask(task.id)} className="delet">
                        <SDeleteicon src="/assets/delete-icon.svg" alt="" />
                    </SDelete>
                </SEdit>
            </STaskitem>
        </STasklist>
    )
}

export default Item