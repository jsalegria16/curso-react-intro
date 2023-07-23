import React from 'react';
import {AppUI} from './AppUI';
import { TodoProvider } from '../TodoContext';


function App() {

  return (
    <TodoProvider>
      <AppUI/> {/*Ahora AppUI es hijo de TodoProvider y sus hijo tienen acceso a toda la info de TodoProvider*/}
    </TodoProvider>
  );
}

export {App}; // Puedo hacer esto.
// O podemos insertar el componente TodoItem dentro del componente App()

