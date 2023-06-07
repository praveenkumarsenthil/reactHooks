import "./style.css"

const TodoList = props=>{
    const{nameDetailsList,deleteItem } = props
    const {name,id} = nameDetailsList


    return(
        <>
        <li className="list">
            <div className="card">
                <label htmlFor="todo">{name}</label>
                <button className="btn" onClick={()=>{
                    deleteItem(id)
                }}> Delete</button>
            </div>
        </li>
        </>
        
    )
}

export default TodoList;