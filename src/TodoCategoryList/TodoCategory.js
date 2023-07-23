import React from 'react';
import './TodoCategoryList.css'
import { TodoContext } from '../TodoContext';

function TodoCategory(props) { // REact component

    const {setActualCategory} = React.useContext(TodoContext)
    console.log('actualcategory: ', props.text , props.isActualCategory);
    return(
        <>
            <li className={`CategoryItem ${props.isActualCategory? 'isActualCategory':''}`} 
            onClick={(event)=>{
                setActualCategory({'text':props.text,'UrlIcon':props.UrlIcon})
                console.log('Ahora están en categoría',{'text':props.text,'UrlIcon':props.UrlIcon});
            }}>
                <img src={props.UrlIcon} alt='Log' className="CategoricIcon"></img>
                {/* <img src="/icons/menu.png" alt="MenuIcon" class="MenuIcon">  */}
                <p>
                    {props.text}  
                </p>
                <p>
                    {props.TotalTasks}
                </p>
                
            </li>
            
        </>       
    );
}

export {TodoCategory};