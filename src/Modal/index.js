import React from "react";
import ReactDom from "react-dom";

localStorage.setItem()

function Modal({children}){ // Teletransporpar cualquier contenido que reciba

    return ReactDom.createPortal(

        // {/*Contenido que queremos teletransportar */}
        <div className="Modal">
            <div className="ModalBackGround">
                {children}
            </div>,
        </div>,
        //A donde lo vamos a teletranspoprtar >> Nodo html
        document.getElementById('Modal') // <div id="Modal" ></div> del public/index.html


    );

}

export {Modal};