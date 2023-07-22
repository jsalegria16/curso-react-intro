// function TodoItem(props) { // REact component

//     return(
//       <li>
//       <div className="CheckItemContainer">
//         <input type="checkbox" className="CheckItem" />
//       </div>
//       <p>{props.Texto}</p>
//       <span> X </span>
//       </li>
//     );
// }

// export {TodoItem};

import React from 'react';


function TodoItem(props) {
  
  const completedClass = props.Completed ? 'completedTask' : ''; // Clase CSS para subrayado si está completado



  return (
    <li>
      <div className="CheckItemContainer">
        <input type="checkbox" className="CheckItem" checked={props.Completed}
          onClick={(event)=>{
            props.onComplete(event.target.checked)
          }}
        />
      </div>
      <p className={completedClass}>{props.Texto}</p>
      <img className='DeleteIconItem' 
        src='https://cdn-icons-png.flaticon.com/128/6755/6755363.png'
        onClick={props.onDetelep} 
        
      />
    </li>
  );
}

export {TodoItem};