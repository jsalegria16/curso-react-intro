// PAra habilitar el ReactContextsdf
import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider ({children}) { // Se usa mas este, uno Provider personalizado

    /*Aquí se encapsula lógica para compartir entre toda la APP , la lógica de App.js*/

        //EStado para los todos
    const { // Aquí renombro lo que me retorna el custumHook
        item,//Era Todos
        saveItems,
        loadind,
        error
    } = useLocalStorage('pru',{
        User1: {
          userNane: "Jhon",
          Categories: [
            {
              UrlIcon: "htt",
              text: "Planned",
              Tasks: [
                { text: "Hello", completed: true }
                ]
            },
            {
              UrlIcon: "htt",
              text: "Planned2",
              Tasks: [
                    { text: "jejej", completed: true }
                ]
            }
          ]
        }
      });

    //Categories - TRabajo futuro >> Implementar esto en el local storage. Esto es lo que trae todo lo demás (todoItems.)
    console.log('Al menos he retornado algo');

    const defaultCategories = item.User1.Categories.map((category) => ({
        UrlIcon: category.UrlIcon,
        text: category.text,
        TotalTasks: category.Tasks.length,
    }));

    console.log('CAts por defecto',defaultCategories);

    

    //Estado para la categoría actual
    const [actualCategory, setActualCategory] = React.useState("Planned")

    const Todos = item.User1.Categories.filter((category)=>category.text==actualCategory)[0].Tasks // Los actuals todos.

    console.log('Todos filtrados de la actual cat', Todos);
    console.log(Todos);
    



    // Para las búsquedas
    const [searchValue,setSearchValue] = React.useState('')
    // console.log('se esta buscanco: ',searchValue);

    //Estado para el modal >> Teletransportación
    const [openModal, setOpenmodal] = React.useState(1);

    


    //Cantidad de Todos Completados
    const completedTodos = Todos.filter((todo)=>
        !!todo.completed//Double negation
    ).length //this is an array

    //CAtidad de Todos //Actual Total todos
    const TotalTodos = Todos.length;


    //PAra buscar Todos
    const searchedTodos = Todos.filter((todo)=>{ // This is a derivated state
        console.log('Buscando?',todo.text);
        return todo.text.toLowerCase().includes(searchValue.toLowerCase())
        }
    )

    //Agregar Todo a la respectiva category


    function updateData(newTodos) {

        const newItem = {...item}

        if (newItem && newItem.User1 && newItem.User1.Categories) {
            const categoriaEncontrada = newItem.User1.Categories.find(category => category.text === actualCategory);
    
            if (categoriaEncontrada) {
                categoriaEncontrada.Tasks = newTodos;
            } else {
                console.error('No se encontró la categoría especificada:', actualCategory);
            }
        } else {
            console.error('Estructura de objeto MyLocalStorage inválida.');
        }

        console.log('new item: ',newItem);
        return newItem
    }

    //Marcar Todos como marcados.
    const completeTodoFunc = (isCompleted,texto) =>{
        const newTodos = [...Todos]; //Copio
        let index = newTodos.findIndex((todo)=> todo.text===texto) // busco index
        newTodos[index].completed = isCompleted //Completo el deseado
        updateData(newTodos)

        saveItems(item) // modifico el estado todos
    }

    //Eliminar Todos.
    const deleteTodoFunc = (texto) =>{
        const newTodos = [...Todos]; //Copio
        let index = newTodos.findIndex((todo)=> todo.text===texto) // busco index
        newTodos.splice(index,1);//(Pisicion inicial, numero de elementos de ahí en adelante)
        updateData(newTodos)
        saveItems(item) // modifico el estado todos
    }

    // Agregar nuevos todos
    const addTodoFunc = (texto) =>{ // Para
        const newTodos = [...Todos]; //Copio
        newTodos.unshift({text:texto,completed:false})
        const newItem = updateData(newTodos)
        saveItems(newItem) // modifico el estado todos
    }





    return(
        <TodoContext.Provider value={{ // {/*Aquí expongo todo, a esto pueden acceder todos */}
            searchValue,
            setSearchValue,
            defaultCategories,
            TotalTodos,
            completedTodos,
            searchedTodos,
            completeTodoFunc,
            deleteTodoFunc,
            loadind, 
            error,
            openModal,
            setOpenmodal,
            addTodoFunc,
            actualCategory, 
            setActualCategory
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