import {Link} from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login=()=>   
{
    const [email,setEmail]=useState(""); //set email
    const [password,setPassword]=useState(""); // state pf password must be empty
    const [message,setMessage]=useState("");  //state of  message should be empty
    const [loading,setLoading]=useState(false); // state of loading button
    const navigate=useNavigate(); // function used to redirect navigation

    const handleSubmit=async(e)=>
    {
        e.preventDefault();
        setLoading(true);
        try{
            const response=await axios.post("http://localhost:5007/Weeding/user/signin",{
                email,
                password,
            });
            // set message to success message
            setMessage(response.data.message);
            localStorage.setItem("token",response.data.token); // save token in local storage

            setTimeout(()=>
            {
                navigate("/dashboard"); // redirect to dashboard

            },1000);
        }
        catch(error){
            setMessage(error.response?.data?.message || "Login failed!");
        }
        finally{
            setLoading(false); // stop loading button
        }
    };
    <style>
        {
            `body {
    font-family: Sen,sans-serif;
    font-weight: 400;}
    h1,h2,h2,h4,h4,h5{
     font-family: Overlock,display;}
}`
        }
    </style>
    return (
        <div style={{marginLeft:"20px",marginBottom:"20px"}}>
             <h1 style={{fontFamily:"Overlock,display"}}>Login</h1>
            <div className="login" style={{display:"inline-block",alignItems:"center",justifyContent:"center",border:"2px solid white",borderRadius:"10px",
                paddingLeft:"90px",paddingRight:"0px",
                width:"400px",paddingTop:"60px",paddingBottom:"60px",background:"white"
            }}>
           
            <form onSubmit={handleSubmit}>
               <div> <label style={{fontFamily:"Overlock,display",fontWeight:"unset"}}>Username or email <span style={{color:"red"}} > *</span></label>
                <input type="email"  value={email} onChange={(e)=> setEmail(e.target.value) } required style={{
                marginTop: "15px",
                backgroundColor: "white",
                color: "black",
                padding: "10px",
                borderRadius: "5px",
                height:"30px",
                width:"250px"}}  className="eml" /></div>
                <div><label style={{marginTop:"15px",fontFamily:"Overlock,display",fontWeight:"unset"}}>Password <span style={{color:"red"}}> *</span></label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required    style={{
                marginTop: "15px",
                backgroundColor: "white",
                color: "black",
                padding: "10px",
                borderRadius: "5px",
                height:"30px",
                width:"250px"
              }} className="pass" /></div>
                <div style={{display:"flex",marginTop:"15px",gap:"20px",}}><label><input type="checkbox"/></label><label style={{fontFamily:"Overlock,display",fontWeight:"unset"}}>Remember me</label></div>
               <div> <button disabled={loading} type="submit" style={{marginTop:"15px",backgroundColor:"#112",width:"100px",height:"40px",textAlign:"center",fontFamily:"Overlock,display"}}>{loading? "Logging in ...":"LOG IN"}</button></div>
               <div><Link to="/newPassword" style={{color:"black",fontFamily:"Overlock,display"}}> <u>Lost your password</u></Link></div>
                
            </form>
            {message && <p>{message}</p>}
            </div>
           
        </div>
    )
}
export default Login;