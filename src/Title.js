import React from 'react';
import './TodoTitle/TodoTitle.css'
import { TodoContext } from './TodoContex';

function TodoTitle(
  //{totalTasks,completedTasks} //Esto ya no, ahora usamos React.useContext(TodoContext)
  ) { // REact component

    const {TotalTodos:totalTasks,completedTodos:completedTasks} = React.useContext(TodoContext) //Elegimos las propiedades que queremos usar.


    return (
        <nav className="BarraNavegavion">
          {/* <img src="/icons/menu.png" alt="MenuIcon" class="MenuIcon"> */}
          <div className="NavBarLeft">
            <ul>
              <li>
              <img src="https://cdn-icons-png.flaticon.com/128/6776/6776595.png" className="CategoricIcon" alt='Log'></img>
              {/* <img src="/icons/menu.png" alt="MenuIcon" class="MenuIcon">  */}
              </li>
              <li>
                  Planned
              </li>
            </ul>
          </div>
          
          <div className="NavBarRight">
            <ul>
              <li className="NavBarEmail">
              {totalTasks} tasks - {completedTasks} completed
              </li>           
            </ul>
          </div>
        </nav>
    );
}

export {TodoTitle};
