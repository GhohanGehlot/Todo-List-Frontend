import { useState } from "react";

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

            {/* <ul>
              <li>Hi</li>
            </ul> */}

            <ul className="flex flex-col items-center ">
               {todos.map((todo , key) => (
                 <div className="bg-white text-black my-2">
                    <li  key={key}>{todo}</li>
                 </div>
                   
               ))}
    
            </ul>

           
           




           
        </>
    )
}

export default Home;