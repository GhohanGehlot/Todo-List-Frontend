import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { FaCheck, FaCross, FaEdit } from "react-icons/fa";

function Home(){

    const [todos , setTodos] = useState(["Gym" , "Work"]);
    const [value , setValue] = useState("")
    

    function  handleClick(value){
      
      setTodos([...todos, value  ]);
      setValue(""),
      console.log(value);
     
        
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
               {todos.map((todo , key) => (
                 <div className=" flex justify-between bg-white text-black  w-6/10 h-10 rounded-lg m-1 ">
                    <li className="text-2xl "  key={key}>{todo}</li>
                    <div className="flex justify center gap-8 mr-5">



                      <button 
                        className="bg-emerald-500 w-8 h-8 mt-1 flex justify-center items-center rounded-md ">
                          <FaCheck/>
                      </button>


                      <button 
                       className="bg-yellow-300 w-8 h-8 mt-1 flex justify-center items-center rounded-md ">
                        <FaEdit/>
                      </button>


                      <button 
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