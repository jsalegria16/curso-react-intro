import './TodoUser.css'

import { TodoContext } from '../TodoContext';
import React from 'react';

function TodoUser() { // REact component
  const {userNane} = React.useContext(TodoContext) //Elegimos las propiedades que queremos usar.

    return (
        <nav className="UserContainer">
            <ul>
              <li>
              <img src="https://cdn-icons-png.flaticon.com/128/949/949647.png" className='UserImage' alt='Log'></img>
              {/* <img src="/icons/menu.png" alt="MenuIcon" class="MenuIcon">  */}
              </li>
              <li>
                <p className='UserName'>{userNane}</p>
                <p className='UserName_Email'>username@email.com</p>
              </li>
            </ul>
        </nav>
    );
}

export {TodoUser};