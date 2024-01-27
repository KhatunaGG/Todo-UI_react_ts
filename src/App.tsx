
import { useState, ChangeEvent, useEffect } from 'react'
import './App.css'
import Title from './components/title/Title'
import Todo from './components/Todo/Todo'
import { ITask } from './Interfaces'


function App() {

  const [task, setTask] = useState<string>('')
  const [todoList, setTodoList] = useState<ITask[]>([])
  const [currentDate, setCurrentDate] = useState(new Date());


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentDate.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  const formattedDay = currentDate.toLocaleDateString('en-US', { weekday: 'short' });
  const formattedDate = currentDate.getDate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTask(e.target.value)
  }

  const addTask = (): void => {
    if (task.length !== 0) {
      const newTask = { taskName: task, completed: false, id: Math.random() * 10 }
      setTodoList([...todoList, newTask])
      setTask('')
    }

  }


  const deleteTask = (id: number) => {
    setTodoList(todoList.filter((el :any) => el.id !== id))
  }

  const completTask = (id : number) => {
    setTodoList(todoList.map((task : any) => {
      if (task.id === id) {
        return { ...task, completed: true }
      } else {
        return task
      }
    }))
  }

  return (
    <div className="main">
      <Title />
      <Todo
        handleChange={handleChange}
        task={task}
        addTask={addTask}
        todoList={todoList}
        deleteTask={deleteTask}
        completTask={completTask}
        formattedTime={formattedTime}
        formattedDay={formattedDay}
        formattedDate={formattedDate}
      />
    </div>
  )
}

export default App
