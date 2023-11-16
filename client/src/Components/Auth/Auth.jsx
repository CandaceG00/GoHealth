
import {useState} from "react"
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Login from "../Login/Index"
import SignUp from "../SignUp/Index"

function Auth(){
  const [tab,setTab]=useState("login")
  

  return <>
  
   {tab=="login" && <Login />}
    {tab=="signup" && <SignUp/>}
    {tab=="signup" && <Container>Already have an account? <Button className="login" variant="primary" type="submit" onClick={()=>{setTab("login")}}>Sign In</Button> instead</Container>}
    {tab=="login" && <Container>Don't have an account? <Button className="login" variant="primary" type="submit" onClick={()=>{setTab("signup")}}>Sign Up</Button> instead</Container>}
  </>
  

}


export default Auth