
import {useState} from "react"
import Login from "../Login/Index"
import SignUp from "../SignUp/Index"

function Auth(){
  const [tab,setTab]=useState("login")
  

  return <>
  
   {tab=="login" && <Login />}
    {tab=="signup" && <SignUp/>}
    {tab=="signup" && <div>Already have an account <button onClick={()=>{setTab("login")}}>sign in</button> instead</div>}
    {tab=="login" && <div>You do not have an account <button onClick={()=>{setTab("signup")}}>sign up</button> instead</div>}
  </>
  

}


export default Auth