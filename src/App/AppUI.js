// import { TodoTitle as MyTodoTitle} from './TodoTitle';
import { TodoList } from '../TodoList';
import { TodoAddItem } from '../TodoList/TodoAddItem';
import { TodoItem } from '../TodoList/TodoItem';

import { TodoTitle } from '../TodoTitle';

import { TodoSearch } from '../TodoSearch';

import { TodoUser } from '../TodoUser';

import { TodoCategoryList } from '../TodoCategoryList';
import { TodoAddCategory } from '../TodoCategoryList/TodoAddCategory';
import { TodoCategory } from '../TodoCategoryList/TodoCategory';

import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import { TodoContext } from '../TodoContext';
import React from 'react';



function AppUI({
    /* // Esto era Props drillling 
    searchValue,
    setSearchValue,
    defaultCAtegories,
    TotalTodos,
    completedTodos,
    searchedTodos,
    completeTodoFunc,
    deleteTodoFunc,
    loadind, 
    error 
    */
}){
    const {defaultCategories,searchedTodos, completeTodoFunc,
        deleteTodoFunc, loadind, error,actualCategory
        } =React.useContext(TodoContext) // Esto no es prop Drilling
        console.log('holaa ????',defaultCategories);
        
    return (
        <>
            <section className='Mainleft'>
                <TodoUser/>
                <TodoSearch 
                    // searchValue = {searchValue}
                    // setSearchValue = {setSearchValue}
                />

                <TodoCategoryList>
                    {/*De acurdo a los estados lading and error de useLocalStorage */}
                    {loadind && <TodosLoading/>}
                    
                    {
                        !loadind && defaultCategories.map(category => (
                        <TodoCategory
                        key={category.text}
                        UrlIcon={category.UrlIcon} 
                        text={category.text}
                        TotalTasks={category.TotalTasks}
                        isActualCategory = {actualCategory.text===category.text}
                        /> 
                        ))
                    } {/*Cada hijo debe tener una clave única, como? el tex :)  - También le paso la prop Texto*/}
                </TodoCategoryList>

                <TodoAddCategory/>

            </section>

            <section className='MainRight'> {/*Con esto me evito encerrar todo en un div.*/}

                <TodoTitle 
                    // totalTasks = {TotalTodos}
                    // completedTasks = {completedTodos}
                /> {/* // Title and counter - Por cada comonente un archivo */} 

                <TodoList>
                    {/*De acurdo a los estados lading and error de useLocalStorage */}
                    {loadind && <TodosLoading/>}
                    {error && <TodosError/>}
                    {(!loadind && searchedTodos.length == 0) && <TodosEmpty/>}
                    {/* //Podemos renderizar un array */}
                    {searchedTodos.map(todo => (
                        <TodoItem 
                        key={todo.text} 
                        Texto={todo.text}
                        Completed={todo.completed}
                        onComplete = {(isCompleted) =>completeTodoFunc(isCompleted,todo.text)} // Le paso la funcion que se encargará de completar el todo respectivo //  Too many re-renders. React limits the number of renders to prevent an infinite loop
                        onDetelep = {() =>deleteTodoFunc(todo.text)}
                        /> 
                        )
                    )} {/*Cada hijo debe tener una clave única, como? el tex :)  - También le paso la prop Texto*/}
                </TodoList>

                <TodoAddItem/>
                {/*  */}
                {
                //openModal && (<Modal>
                    
                   // {/* Aquí quiero todo lo que se quiera teletransportar */}
                //</Modal>)
                }
            </section>
        </>
        
    );
}

export {AppUI}