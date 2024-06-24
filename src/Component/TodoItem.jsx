import { useContext } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { todoitemscontext } from "../assets/Store/Items-store";

function TodoItem({todoname,tododate}){
  const{DeleteItem}=useContext(todoitemscontext)
    
    return( <div className="container ">

    <div className="row kg-row">
      <div className="col-6">
       {todoname}
      </div>
      <div className="col-4">
      {tododate}
      </div>
      <div className="col-2">
      <button type="button" className="btn btn-danger kg-btn" 
      onClick={()=>DeleteItem(todoname)}
      ><MdDeleteSweep /></button>
      </div>
    </div>
    </div>

    )
}
export default TodoItem