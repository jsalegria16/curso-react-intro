import React from 'react';

import { TodoTitle } from './TodoTitle';
// import { TodoTitle as MyTodoTitle} from './TodoTitle';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoAddItem } from './TodoAddItem';
import { TodoUser } from './TodoUser';
import { TodoCategoryList } from './TodoCategoryList';
import { TodoAddCategory } from './TodoAddCategory';
import { TodoCategory } from './TodoCategory';


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

function useLocalStorage(itemNAme,initialValue) { // Vamos a abstraer cosas

  //Llamando el local starage
  const LocalStorageItems= localStorage.getItem(itemNAme) // Esting mode
  let parsedItems ;

  if (!LocalStorageItems) { //Null, vacio, ...
    localStorage.setItem(itemNAme,JSON.stringify(initialValue))
    parsedItems = initialValue;
  }else{
    parsedItems = JSON.parse(LocalStorageItems) // Lo transformo
  }

  //Estado inicial de React
  const [item,setItem] = React.useState(parsedItems); //Estado inicial del custom hook


  const saveItems = (newItem) => { //PErsisitencia y actualizacion de estado todo
    localStorage.setItem(itemNAme,JSON.stringify(newItem))
    setItem(newItem)
  };

  return [item, saveItems]
}



function App() {

  

  //EStado para los todos
  const [Todos,saveTodos] = useLocalStorage('TODOS_V1',[]);


  //Categories - TRabajo futuro >> Implementar esto en el local storage. Esto es lo que trae todo lo demás (todoItems.)
  const defaultCAtegories = [
    {UrlIcon: 'https://cdn-icons-png.flaticon.com/128/6776/6776595.png',text: 'Planned', Tasks:Todos },
  ]

  // Para las búsquedas
  const [searchValue,setSearchValue] = React.useState('')
  // console.log('se esta buscanco: ',searchValue);


  const completedTodos = Todos.filter((todo)=>
    !!todo.completed//Double negation
  ).length //this is an array
  const TotalTodos = Todos.length;

  const searchedTodos = Todos.filter((todo)=>{ // This is a derivated state
    return todo.text.toLowerCase().includes(searchValue.toLowerCase())
    }
  )


  

  const completeTodoFunc = (isCompleted,texto) =>{
    const newTodos = [...Todos]; //Copio
    let index = newTodos.findIndex((todo)=> todo.text===texto) // busco index
    newTodos[index].completed = isCompleted //Completo el deseado
    saveTodos(newTodos) // modifico el estado todos
  }

  const deleteTodoFunc = (texto) =>{
    const newTodos = [...Todos]; //Copio
    let index = newTodos.findIndex((todo)=> todo.text===texto) // busco index
    newTodos.splice(index,1);//(Pisicion inicial, numero de elementos de ahí en adelante)
    saveTodos(newTodos) // modifico el estado todos
  }


  return (
    <> {/*React. */}
      <section className='Mainleft'>
        <TodoUser/>
        <TodoSearch 
          searchValue = {searchValue}
          setSearchValue = {setSearchValue}
        />
        <TodoCategoryList>
          {/* Podemos renderizar un array */}
          {defaultCAtegories.map(category => (
          <TodoCategory
            key={category.text}
            UrlIcon={category.UrlIcon} 
            text={category.text}
            TotalTasks={TotalTodos}
          /> 
          ))} {/*Cada hijo debe tener una clave única, como? el tex :)  - También le paso la prop Texto*/}
        </TodoCategoryList>
        <TodoAddCategory/>
      </section>
      <section className='MainRight'> {/*Con esto me evito encerrar todo en un div.*/}
        <TodoTitle 
          totalTasks = {TotalTodos}
          completedTasks = {completedTodos}
        /> {/* // Title and counter - Por cada comonente un archivo */} 
        <TodoList>
          {/* Podemos renderizar un array */}
          {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            Texto={todo.text}
            Completed={todo.completed}
            onComplete = {(isCompleted) =>completeTodoFunc(isCompleted,todo.text)} // Le paso la funcion que se encargará de completar el todo respectivo //  Too many re-renders. React limits the number of renders to prevent an infinite loop
            onDetelep = {() =>deleteTodoFunc(todo.text)}
          /> 
          ))} {/*Cada hijo debe tener una clave única, como? el tex :)  - También le paso la prop Texto*/}
        </TodoList>
        <TodoAddItem/>
      </section>
    </>
    
  );
}


export {App}; // Puedo hacer esto.
// O podemos insertar el componente TodoItem dentro del componente App()

