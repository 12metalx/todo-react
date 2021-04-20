import { useState } from "react"

interface Itasks{
    id: string;
    task: string;
}
interface Props {
    id: string;
    task: string;
    setTasks: React.Dispatch<React.SetStateAction<Itasks[]>>;
    tasks: Itasks[];
}
const Todo = ({id,task,setTasks,tasks}: Props) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editing, setEditing] = useState<string>("")
    const delTask = () =>{
        setTasks(tasks.filter(task => task.id !== id ))
    }
    const editTask = () =>{
        setEdit(true)
        setEditing(task)
    }
    const handleChnage = (e: React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault()
        setEditing(e.target.value)
    }
    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault()
        const auxTask: Itasks | undefined = tasks.find(task => task.id === id)
        setEditing("")
        setEdit(false)
    }
    return (
        <section>
        {edit ? <form onSubmit={handleSubmit}>
            <input type="text" value={editing} onChange={handleChnage}/>
        </form> : task}
        

        <span onClick={delTask}>
            ❌
        </span>
        <span onClick={editTask}>
            ✏
        </span>
        </section>
    )
}

export default Todo
