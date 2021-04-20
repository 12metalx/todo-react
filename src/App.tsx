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
    
    
    return(
        <main>
            <Form setTasks={settasks} tasks={tasks}/>
            {tasks.map(({id,task})=>{
                return(
                <Todo key={id} id={id} task={task} tasks={tasks} setTasks={settasks} />
                )
            })}
        </main>
    );
}
export default App;