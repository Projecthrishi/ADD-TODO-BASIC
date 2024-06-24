import style from "./Welcome.module.css"
import { useContext } from "react";
import { todoitemscontext } from "../assets/Store/Items-store";

const Welcome=()=>{
    const {todoitems}=useContext(todoitemscontext);
    
return (
    todoitems.length === 0 && <p className={style.Welcome}>Enjoy your day.</p>
);
};
export default Welcome;