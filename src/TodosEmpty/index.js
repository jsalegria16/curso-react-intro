import React from 'react';
import './TodosEmpty.css'; // Importa el archivo CSS aquí

function TodosEmpty() {
  return (
    <div className="empty-container">
      <p className="empty-message">Agrega tu primera tarea</p>
    </div>
  );
}

export  {TodosEmpty};