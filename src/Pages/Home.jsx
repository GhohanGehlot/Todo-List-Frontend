import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { FaCheck, FaEdit } from "react-icons/fa";

function Home(){

    const [todos , setTodos] = useState(["gym" ,"Work" , "Play"]);
    const [value , setValue] = useState("");
    const [completed , setCompleted] = useState(false);
    const [edit , setEdit] = useState(false);
    const [editIndex , setEditIndex] = useState(null);
    const [editText , setEditText] = useState("");
    
    
    

    function  handleClick(value){
      
      setTodos([...todos, value  ]);
      setValue(""),
      console.log("value " ,value);
     
        
    }

    function isCompleted(index , todo){
        setCompleted(true);
        // setTodos(todos.filter( t =>  t!== todo )); 
          setTodos((prev) => {
        return [
         ...prev.slice(0, index),
         ...prev.slice(index + 1),
       ]
        }); 
        console.log(index);
        
        
    }

    function closed(index , todo){
      setTodos((prev) => {
        return [
         ...prev.slice(0, index),
         ...prev.slice(index + 1),
       ]
        }); 
    }

  

    function onEdit(index , todo){
      setEditIndex(index);
      setEditText(todo);

    }

    function saveEdit(index){
      setTodos(todo => todo.map((t, i) => (i === index ? editText : t )));
      setEditIndex(null);
      setEditText('');
    }
  

    return(
        <>
            <div className=" flex justify-center mt-5">
              <input
                onChange={(e) => {setValue(e.target.value)}}
                value={value}
                type="text"
                className="bg-white text-black w-3/5 rounded-md"
                placeholder="What you will do ?"
              />

              <button onClick={() => { handleClick(value)}} className="btn primary ml-1 bg-blue-500">
                Add
              </button>
            </div>


            <ul className="flex flex-col items-center px-2 mt-2  ">
               {todos.map((todo , index) => (
                 <div key={index} className=" flex justify-between bg-white text-black  w-6/10 h-10 rounded-lg m-1 ">
                    <li className="text-2xl "  key={index} >
                      { editIndex === index ? 
                       <input  type="text" 
                               value={editText} 
                              onChange={((e) => setEditText(e.target.value))}
                              onBlur={() => saveEdit(index)}
                              onKeyDown={(e) => e.key === "Enter" && saveEdit(index)}
                              autoFocus
                       /> : todo}
                       </li>
                    <div className="flex justify center gap-8 mr-5">



                      <button 
                        onClick={() => isCompleted(index , todo)}
                        className="bg-emerald-500 w-8 h-8 mt-1 flex justify-center items-center rounded-md ">
                          <FaCheck/>
                      </button>




                      <button 
                       onClick={() => onEdit(index , todo)}
                       className="bg-yellow-300 w-8 h-8 mt-1 flex justify-center items-center rounded-md ">
                        <FaEdit/>
                      </button>


                      <button 
                        onClick={() => closed(index , todo)}
                       className="bg-red-500 w-8 h-8 mt-1 flex justify-center items-center rounded-md ">
                        <CloseIcon/>
                      </button>


                    </div>
                    

                 </div>
                   
               ))}
    
            </ul>
           
        </>
    )
}

export default Home;