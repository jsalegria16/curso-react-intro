import React from 'react'; 

function useLocalStorage(itemNAme,initialValue) { // Vamos a abstraer cosas

    //Estado inicial de React
    // Mas adelante se utiliza un React.effect
    const [item,setItem] = React.useState(initialValue); //Estado inicial del custom hook
    let parsedItems ;
    // Estado para CArga o error
    /* Con estos valores voy a renderizar algo en AppUI >> <TodoList> </TodoList> */
    const [loadind, setLoading] = React.useState(true); // Valor true por defecto
    const [error, setError] = React.useState(false); // Valor false por defecto



    //Llamando el local starage
    
  
    // Efecto.
    React.useEffect(()=>{
      setTimeout(()=>{try{
        const LocalStorageItems= localStorage.getItem(itemNAme) // Esting mode
        console.log('Getting local storage');
        

        if (!LocalStorageItems) { //Null, vacio, ...
          localStorage.setItem(itemNAme,JSON.stringify(initialValue))
          parsedItems = initialValue;
        }else{
          parsedItems = JSON.parse(LocalStorageItems) // Lo transformo
          setItem(parsedItems)// Actualizo mi estado de items.
        } 
        setLoading(false)//Cuando todo haya cargado, ya no se está cargando

      }catch(error){
        setLoading(false) // Pasó un error, dejar de cargar
        setError(true) // 
      }},2000)

    },[])
    
  
    const saveItems = (newItem) => { //PErsisitencia y actualizacion de estado todo
      localStorage.setItem(itemNAme,JSON.stringify(newItem))
      setItem(newItem)
    };
    
    console.log(item);
    return {item, saveItems,loadind,error}
}

export {useLocalStorage}; 


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
//localStorage.deleteItem('TODOS_V1')

// MyLocalStorage = {

//   User1 : {
//       userNane: 'J',
//       Categories: [
//           {
//               UrlIcon: 'htt',
//               text: 'Planned',
//               Tasks:[
//                   {text: 'Aprovar la FSDWJS', completed: true},
//               ]
//           },
//           {
//               UrlIcon: 'htt',
//               text: 'Planned',
//               Tasks:[
//                   {text: 'Aprovar la FSDWJS', completed: true},
//               ]
//           }  
//       ]     
//   }

// }


// localStorage.setItem('pru',JSON.stringify(MyLocalStorage))

