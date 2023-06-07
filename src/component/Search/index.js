import  {useState,useEffect} from "react"
import {v4 as uuidv4} from "uuid"

import TodoList from "../TodoList"


import "./style.css"

const Search = () => {
     const[name,setName]= useState("")
     const [VarietyNameList,setNameList] = useState([])
    const nameChange = event=> setName(event.target.value);
    
    const addTodoList = event =>{
        event.preventDefault()
        const newName = {
            id : uuidv4(),
            name,
        }
        
        setNameList((prevName)=>[...prevName,newName])
        localStorage.setItem("list",JSON.stringify(VarietyNameList))
        setName("")
        let json = localStorage.getItem("list")
        console.log(JSON.parse(json))
    }
    
        const deleteTodo = (id) => {
            let array = []
            VarietyNameList.map((eachItem) =>{
                if(eachItem.id !== id){
                   array.push(eachItem)
                }
            })
         setNameList(array)
        }
    
        
        

     return (
        <div className="main-conatiner">
            <div className="main-conatiner1">
                <form onSubmit={addTodoList}>
                <h1>TodoList</h1>
                <input type="search" placeholder="Todo" value={name} onChange={nameChange} />
                <button type="submit">Add</button>
                </form>
                <div>
                    <h1>My Tasks</h1>
                <ul className="list">
                    {VarietyNameList.map((eachItem)=>(
                        <TodoList key={eachItem.id} nameDetailsList={eachItem} deleteItem = {deleteTodo}/>
                    ))}
                </ul>
                </div>
            </div>
        </div>
     )
}

export default Search;