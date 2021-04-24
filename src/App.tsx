import Form from "./modules/Form"
import {useState} from 'react'
import Todo from "./modules/Todo"
import "./scss/main.scss"

export interface Itasks{
    id: string
    task: string;
}
const App = () =>{

    const [tasks, settasks] = useState<Itasks[]>([])
    
    const editTodo = ({id,task}: Itasks) => {
        settasks(tasks.map((todo: Itasks)=>{
            return(
                todo.id === id ? {id:id,task:task} : todo
            )
        }))
    }
    
    return(
        <>
            <Form setTasks={settasks} tasks={tasks}/>
            <main>
            {tasks.map(({id,task})=>{
                return(
                <Todo key={id} id={id} task={task} tasks={tasks} setTasks={settasks} onSubmit={editTodo} />
                )
            })}
            </main>
        </>
    );
}
export default App;