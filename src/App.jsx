import AddTodo from "./Component/AddTodo";
import AppName from "./Component/AppName";
import "./APP.css";
import { useState } from "react";
import Items from "./Component/Items";
import Welcome from "./Component/Welcome";
import { todoitemscontext } from "./assets/Store/Items-store";

function App() {
  
  const [todoitems, setTodoitems] = useState([]);
  const addNewItem = (itemName, itemDate) => {
  
    setTodoitems((currvalue)=> {
      const newTodoItem=[
        ...currvalue,
        {name:itemName,date:itemDate} ,
      ];
      return newTodoItem;
    });
 
  };
  const DeleteItem = (TodoItemName) => {
    const newTodoItem = todoitems.filter((item) => item.name !== TodoItemName);
    setTodoitems(newTodoItem);
  };
  return (
    <todoitemscontext.Provider value={{
      todoitems,
      addNewItem,
      DeleteItem



    }}>
    <center className="todo-container">
      <AppName />
      <AddTodo  />
     <Welcome ></Welcome>
      <Items ></Items>
    </center>
    </todoitemscontext.Provider>
  );
}

export default App;
