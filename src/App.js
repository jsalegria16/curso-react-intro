import { TodoTitle } from './TodoTitle';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoAddItem } from './TodoAddItem';
import React from 'react';
import { TodoUser } from './TodoUser';

const defaultTodos = [
  {text: 'Todo 1', completed: true},
  {text: 'Todo 2', completed: true},
  {text: 'Todo 3', completed: true},
  {text: 'Todo 4', completed: true},
]

function App() {
  return (
    <> {/*React. */}
      <section className='Mainleft'>
        <TodoUser/>
        <TodoSearch />

        {/* <TodoGrupList /> */}
        {/* <TodoAddGroup/> */}
      </section>
      <section className='MainRight'> {/*Con esto me evito encerrar todo en un div.*/}
        <TodoTitle 
          totalTasks = {35}
          completedTasks = {23}
        /> {/* // Title and counter - Por cada comonente un archivo */} 
        
        <TodoList>
          {/* Podemos renderizar un array */}
          {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            Texto={todo.text}
            Comnpleted={todo.completed}
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

