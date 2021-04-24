import React, { Dispatch, FormEventHandler, SetStateAction } from "react";
import {useState} from "react";
import {nanoid} from "nanoid"

interface Itasks{
    id: string;
    task: string;
}
interface Props{
    setTasks: React.Dispatch<React.SetStateAction<Itasks[]>>;
    tasks: Itasks[];
};

const Form = ({setTasks,tasks}:Props) => {
    const [newTask, setNewTask] = useState<string>("")
    const handleChnage = (e: React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault()
        setNewTask(e.target.value)
    }
    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        setTasks([...tasks,{id: nanoid(5),task:newTask}])
        setNewTask("")
    }
    
    return (
        <form id="formTask" onSubmit={handleSubmit}>
            <label >Task:</label><input type="text" id="txtTodo" value={newTask} onChange={handleChnage}/>
            <button>+</button>
        </form>
    )
}

export default Form
