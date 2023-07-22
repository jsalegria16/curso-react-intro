import React from 'react'
import './loading.css';

function TodosLoading(){

    return(

        <div className="loading-container">
            <div className="loading"></div>
            <p>Loading...</p>
        </div>

    );
}

export {TodosLoading}