import Form from "./modules/Form"
import {useState, useEffect} from 'react'
import Todo from "./modules/Todo"
import {nanoid} from "nanoid"

export interface Itasks{
    id: string
    task: string;
}
const App = () =>{

    const [tasks, settasks] = useState<Itasks[]>([])
    const delTask = (id:string) =>{
        settasks(tasks.filter(task => task.id !== id ))
    }
    const editTodo = ({id,task}: Itasks) => {
        settasks(tasks.map((todo: Itasks)=>{
            return(
                todo.id === id ? {id:id,task:task} : todo
            )
        }))
    }
    
    return(
        <main>
            <Form setTasks={settasks} tasks={tasks}/>
            {tasks.map(({id,task})=>{
                return(
                <Todo key={id} id={id} task={task} tasks={tasks} setTasks={settasks} onSubmit={editTodo} />
                )
            })}
        </main>
    );
}
export default App;