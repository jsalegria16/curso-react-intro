import './TodoAddItem.css'
function TodoAddItem(){
    return(
        <footer className='AddItemContainer'>
            <input className="InputTask" placeholder="Add a task" />
            <input type="submit" value="Add" className="PrimaryButton AddTask" 
                onClick={(event) => {
                    console.log('He dado click');
                    console.log(event.target);
                }}
            
            />
        </footer>

    );
}

export {TodoAddItem}