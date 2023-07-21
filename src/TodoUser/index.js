import './TodoUser.css'

function TodoUser() { // REact component
    return (
        <nav className="UserContainer">
            <ul>
              <li>
              <img src="https://cdn-icons-png.flaticon.com/128/949/949647.png" className='UserImage' alt='Log'></img>
              {/* <img src="/icons/menu.png" alt="MenuIcon" class="MenuIcon">  */}
              </li>
              <li>
                <p className='UserName'>Jhon Sebastian Alegria a</p>
                <p className='UserName_Email'>username@email.com</p>
              </li>
            </ul>
        </nav>
    );
}

export {TodoUser};