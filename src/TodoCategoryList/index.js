import './TodoCategoryList.css'
function TodoCategoryList(props){

    return(
        <div className='ContainerCategoryList'>
            <ul className="TodoCategoryList">
                {props.children}
            </ul>
        </div>
    )    

}
export {TodoCategoryList}