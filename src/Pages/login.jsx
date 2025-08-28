import { useNavigate } from "react-router-dom";

function Login(){
     let navigate = useNavigate();

     function handleSignup(){
        navigate("/signup");
     }

    return(

       

        <div className=" flex justify-center items-center m-auto p-60 ">

              
            <div className="card bg-primary text-primary-content w-96 flex justify-center items-center absolute h-3/7 ">
             <h2 className="card-title mt-5 bold text-2xl">Login</h2>
            <div className="card-body flex flex-col justify-center  ">
                 
                
                    <input 
                      type="email"
                      placeholder="email"
                      className="bg-white text-black rounded-md p-3  relative w-80"
                     />
                 

                
                    <input 
                     type="text" 
                     placeholder="password"
                     className="bg-white text-black rounded-md p-3 mt-4" 
                    />
                             
                <div className="card-actions justify-center ">
                <button className="btn w-80 mt-13 ">Login</button>
                </div>
                <p
                    className="flex justify-end" 
                >Don't have an account ?<span onClick={handleSignup} className="underline hover:text-yellow-400 cursor-pointer"> Signup</span></p>
            </div>
        </div>


        </div>
       
    )
}

export default Login;