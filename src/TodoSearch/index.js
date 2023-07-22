import React from 'react'
import { TodoContext } from '../TodoContex';

function TodoSearch(
    // {searchValue,setSearchValue} // Ahora uso const {searchValue,setSearchValue} = React.useContext(TodoContext)
){
    const {searchValue,setSearchValue} = React.useContext(TodoContext)

    return(

        <input className="input SearchInput" placeholder="Search"
            value={searchValue} 
            onChange={(event)=>{
                setSearchValue(event.target.value)
            }}
        />

    );
}

export {TodoSearch}