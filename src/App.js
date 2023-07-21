import React from 'react';
import {AppUI} from './AppUI';
import { useLocalStorage } from './useLocalStorage';





// const defaultTodos = [
//   {text: 'Aprovar la FSDWJS', completed: true},
//   {text: 'Terminar curso de ract', completed: true},
//   {text: 'Despertar a las 5 y estudiar ingles', completed: false},
//   {text: 'jugar dota 2', completed: true},
//   {text: 'La tesis :)', completed: false},
//   {text: 'Escribitle a dani', completed: false},
//   {text: 'Traer leña', completed: false},
//   {text: 'Ordeñar', completed: false},

// ]

// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos))
//localStorage.deleteItem('TODOS_V1')



function App() {

  
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


  return (
    <AppUI
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    defaultCAtegories={defaultCAtegories}
    TotalTodos={TotalTodos}
    completedTodos={completedTodos}
    searchedTodos={searchedTodos}
    completeTodoFunc = {completeTodoFunc}
    deleteTodoFunc = {deleteTodoFunc}
    loadind = {loadind}
    error = {error}

    />     
  );
}

export {App}; // Puedo hacer esto.
// O podemos insertar el componente TodoItem dentro del componente App()

