import React from 'react';
import './TodoAddItem.css'
import { TodoContext } from '../TodoContext';
function TodoAddItem(){
    const {setOpenmodal,addTodoFunc:addTodo} =React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValues] = React.useState(undefined) // este no es necesario global. Es solo la info del usuario

    const onSubmit = (event) => { //Este se crea cuando doy click a botón último
        event.preventDefault()// PAra cancelar el recargue de la pag cuando damos click al boton 
        console.log('Vas a agregar este valor? ',newTodoValue);
        !newTodoValue? console.log('Nada!!'): (addTodo(newTodoValue))
        !newTodoValue? console.log('Nada!!'): setNewTodoValues(undefined)
    }

    const onChange = (event) =>{
        // console.log(event.target.value);
        setNewTodoValues(event.target.value)
    }
    
    return(
        <form className='AddItemContainer' onSubmit={onSubmit}>
            <textarea type="text" className="InputTask" placeholder="Add a task"
                onChange={onChange} 
                value={!newTodoValue? '' : newTodoValue }
                
            />


            <input type="submit" value="Add" className="PrimaryButton AddTask" 
                onClick={(event) => {
                    console.log('He dado click')
                }}
            />
        </form>

    );
}

export {TodoAddItem}