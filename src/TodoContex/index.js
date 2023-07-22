// PAra habilitar el ReactContext
import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider ({children}) { // Se usa mas este, uno Provider personalizado

    /*Aquí se encapsula lógica para compartir entre toda la APP , la lógica de App.js*/

        //EStado para los todos
    const { // Aquí renombro lo que me retorna el custumHook
        item:Todos,
        saveItems:saveTodos,
        loadind,
        error
    }= useLocalStorage('TODOS_V1',[]);

    //Categories - TRabajo futuro >> Implementar esto en el local storage. Esto es lo que trae todo lo demás (todoItems.)
    const defaultCAtegories = [
        {UrlIcon: 'https://cdn-icons-png.flaticon.com/128/6776/6776595.png',text: 'Planned', Tasks:Todos },
    ]

    // Para las búsquedas
    const [searchValue,setSearchValue] = React.useState('')
    // console.log('se esta buscanco: ',searchValue);

    //Estado para le modal >> Teletransportación

    const [openModal, setOpenmodal] = React.useState(1);


    //Cantidad de Todos Completados
    const completedTodos = Todos.filter((todo)=>
        !!todo.completed//Double negation
    ).length //this is an array

    //CAtidad de Todos 
    const TotalTodos = Todos.length;


    //PAra buscar Todos
    const searchedTodos = Todos.filter((todo)=>{ // This is a derivated state
        return todo.text.toLowerCase().includes(searchValue.toLowerCase())
        }
    )

    //Marcar Todos como marcados.
    const completeTodoFunc = (isCompleted,texto) =>{
        const newTodos = [...Todos]; //Copio
        let index = newTodos.findIndex((todo)=> todo.text===texto) // busco index
        newTodos[index].completed = isCompleted //Completo el deseado
        saveTodos(newTodos) // modifico el estado todos
    }

    //Eliminar Todos.
    const deleteTodoFunc = (texto) =>{
        const newTodos = [...Todos]; //Copio
        let index = newTodos.findIndex((todo)=> todo.text===texto) // busco index
        newTodos.splice(index,1);//(Pisicion inicial, numero de elementos de ahí en adelante)
        saveTodos(newTodos) // modifico el estado todos
    }


    return(
        <TodoContext.Provider value={{ // {/*Aquí expongo todo, a esto pueden acceder todos */}
            searchValue,
            setSearchValue,
            defaultCAtegories,
            TotalTodos,
            completedTodos,
            searchedTodos,
            completeTodoFunc,
            deleteTodoFunc,
            loadind, 
            error,
            openModal
        }}>
            {children}
        </TodoContext.Provider>
    );
}

function TodoConsumer() { // Se usa mas este, uno Provider personalizado

    
    return(
        <TodoContext.Consumer>

        </TodoContext.Consumer>
    );
}



export {TodoContext,TodoConsumer,TodoProvider}