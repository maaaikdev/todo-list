import { useState } from 'react'
import Todo from './Todo';
import './TodoApp.css'

export default function TodoApp() {

    const [title, setTitle] = useState('');
    const [todos, setTodos] = useState([]);

    function handleClick(e) {
        e.preventDefault(); //Anula el comportamiento del e
        setTitle('Marcod')
    }

    function handleChange(e) {
        const value = e.target.value;
        setTitle(value)
    }

    function handleSubmit(e) {
        e.preventDefault(); 
        
        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false,
        }

        const temp = [...todos];
        temp.unshift(newTodo);

        setTodos(temp);

        setTitle('')
    }

    function handleUpdate(id, value) {
        const temp = [...todos];
        const item = temp.find(item => item.id === id);
        item.title = value;
        setTodos(temp)
    }

    function handleDelete(id){
        const temp = todos.filter((item) => item.id !== id);
        setTodos(temp)
    }

    return (
        <div className="todoContainer">            
            <form className="todoCreateForm" onSubmit={handleSubmit}>
                <input onChange={handleChange}  className="todoInput" value={title}/>
                <input onClick={handleSubmit}  type="submit" value="Create to do" className="buttonCreate" />
            </form>
            <div className='todosContainer'>
                {
                    todos.map((item) => (
                        <Todo item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                    ))
                }
            </div>
        </div>
    )
}