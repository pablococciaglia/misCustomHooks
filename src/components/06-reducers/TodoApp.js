import React, { useEffect, useReducer } from 'react';
import { useForm } from '../hooks/useForm';
import './styles.css';
import { todoReducer } from './todoReducer';

const init =()=>{
    
        return JSON.parse(localStorage.getItem('todos')) || [];
         
}


export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init)
    
    const [{descripcionTodo}, handleInputChange, reset] =useForm({
        descripcionTodo: ""
    });
    
    
    
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])
   
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (descripcionTodo.trim().length<=1){
            return;
        }

        const newTodo={
            id: new Date().getTime(),
            descripcion: descripcionTodo,
            done: false
        };

        const action = {
            type: "agregar",
            payload: newTodo
        }

        dispatch (action);
        reset();
    }

    const handleQuitar=(todoId)=>{
        
        const action = {
            type: "quitar",
            payload: todoId
        }

        dispatch (action);
    }

    const handleToggle = (todoId) =>{
        dispatch({
            type : "tuggle",
            payload : todoId
        })
    }
    
    return (
        <div>
            <h1>Todo App ({todos.length})</h1>
            <hr/>
            <ul className="list-group list-group-flush">
                {
                    todos.map((todo, indice)=>(
                        <li
                            key={todo.id}
                            className="list-group-item"
                        ><p 
                            onClick={()=>handleToggle(todo.id)}
                            className={`${todo.done && 'complete'}`}
                        >
                            <button 
                                onClick = {()=>handleQuitar (todo.id)}
                                className="btn btn-danger"
                            >Borrar tarea</button>
                        
                            ...{indice+1}. {todo.descripcion} 
                        </p>
                        
                        </li>
                        
                    ))
                }
                
            </ul>
            <div>
                <h4>Agregar ToDo</h4>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="descripcionTodo"
                        placeholder="nueva tarea"
                        autoComplete= "off"
                        className="form-control"
                        value={descripcionTodo}
                        onChange= {handleInputChange}
                    />
                    <button 
                        className="btn btn-primary mt-1 btn-block"
                    >Agregar tarea</button>
                </form>
            </div>
        </div>
    )
}

