// import React from "react";

// function useLocalStorage(itemNAme, initialValue) {
//   // Vamos a abstraer cosas

//   //Estado inicial de React
//   // Mas adelante se utiliza un React.effect
//   const [item, setItem] = React.useState(initialValue); //Estado inicial del custom hook
//   console.log("Initial value:", item);
//   let parsedItems;
//   // Estado para CArga o error
//   /* Con estos valores voy a renderizar algo en AppUI >> <TodoList> </TodoList> */
//   const [loadind, setLoading] = React.useState(true); // Valor true por defecto
//   const [error, setError] = React.useState(false); // Valor false por defecto

//   //Llamando el local starage

//   // Efecto.
//   // React.useEffect(()=>{
//   try {
//     const LocalStorageItems = localStorage.getItem(itemNAme); // Esting mode
//     console.log("Getting local storage", LocalStorageItems);

//     if (!LocalStorageItems) {
//       //Null, vacio, ...
//       localStorage.setItem(itemNAme, JSON.stringify(initialValue));
//       parsedItems = initialValue;
//     } else {
//       parsedItems = JSON.parse(LocalStorageItems); // Lo transformo
//       setItem(parsedItems); // Actualizo mi estado de items.
//       console.log('item',item);
//     }
//     setLoading(false); //Cuando todo haya cargado, ya no se está cargando
//   } catch (error) {
//     setLoading(false); // Pasó un error, dejar de cargar
//     setError(true); //
//   }

//   // },[])

//   const saveItems = (newItem) => {
//     //PErsisitencia y actualizacion de estado todo
//     localStorage.setItem(itemNAme, JSON.stringify(newItem));
//     setItem(newItem);
//   };

//   return { item, saveItems, loadind, error };
// }

// export { useLocalStorage };

import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    try {
      const localStorageItems = localStorage.getItem(itemName);
      
      const parsedItems = JSON.parse(localStorageItems);
      setItem(parsedItems);
      console.log("parsedItems", parsedItems);

      if (!localStorageItems) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        setItem(initialValue);
      } else {
        const parsedItems = JSON.parse(localStorageItems);
        setItem(parsedItems);
        // console.log('parsed', parsedItems);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }, [itemName, initialValue]); // Use an empty dependency array to run the effect only once on mount.

  console.log(item);
  const saveItems = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItems, loading, error };
}

export { useLocalStorage };


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

// MyLocalStorage = 
//   {
//     User1: {
//       userNane: "J",
//       Categories: [
//         {
//           UrlIcon: "htt",
//           text: "Planned",
//           Tasks: [{ text: "Aprovar la FSDWJS", completed: true }],
//         },
//         {
//           UrlIcon: "htt",
//           text: "Planned",
//           Tasks: [{ text: "Aprovar la FSDWJS", completed: true }],
//         },
//       ],
//     },
//   }


// localStorage.setItem('pru',JSON.stringify(MyLocalStorage))
