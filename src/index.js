import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';

// import { TodoTitle as MyTodoTitle} from './TodoTitle';



const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<App />); // Lo que sea que esté dentro del archivo app lo vamos a renderizar
//dentro de root, el cual es el div con Id root(Archivo public/index.html)