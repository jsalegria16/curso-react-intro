// import { TodoTitle as MyTodoTitle} from './TodoTitle';
import { TodoList } from './TodoList';
import { TodoAddItem } from './TodoList/TodoAddItem';
import { TodoItem } from './TodoList/TodoItem';

import { TodoTitle } from './Title';

import { TodoSearch } from './TodoSearch';

import { TodoUser } from './TodoUser';

import { TodoCategoryList } from './TodoCategoryList';
import { TodoAddCategory } from './TodoCategoryList/TodoAddCategory';
import { TodoCategory } from './TodoCategoryList/TodoCategory';

function AppUI({
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

}){

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

                {/*De acurdo a los estados ladong and error de useLocalStorage */}
                {loadind && <p> We're loadong be patient plis </p>}
                {error && <p> Panic  </p>}
                {(!loadind && searchedTodos.length == 0) && <p>crea tu Todo </p>}

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

export {AppUI}