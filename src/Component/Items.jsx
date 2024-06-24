import TodoItem from "./TodoItem"
import { useContext } from "react";
import { todoitemscontext } from "../assets/Store/Items-store";

const Items =({onDeleteClicked})=>{

    const {todoitems}=useContext(todoitemscontext);
    

    return (
    <div className="item-container">
        {todoitems.map((item)=>(
            <TodoItem todoname={item.name} tododate={item.date} ></TodoItem>
        ))}
      
      
      
      </div>
    );
}
export default Items