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
        console.log('hiiiii je jeje  j');
        console.log(LocalStorageItems);
        

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