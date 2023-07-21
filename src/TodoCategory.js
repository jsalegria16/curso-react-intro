function TodoCategory(props) { // REact component

    return(
        <>
            <li>
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