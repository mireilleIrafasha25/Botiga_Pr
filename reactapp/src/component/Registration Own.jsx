import { useState } from "react";
import axios from "axios";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Register_own=()=>
{
    const [Firstname,setFirstname] =useState("");
    const [Lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     const [message, setMessage] = useState("");
     const [loading, setLoading] = useState(false);
     const [showPassword, setShowPassword] = useState(false); 
     const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); 
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post("http://localhost:5007/Weeding/user/signup", {
                Firstname,
                Lastname,
                email,
                password,
                confirmPassword
            });
            setMessage(response.data.message);
            setTimeout(()=>
            {
                navigate("/login")
            },1000)
        } catch (error) {
            setMessage(error.response?.data?.message || "SignUp Failed")
        }
        finally{
            setLoading(false);
        }
    };

    return(
        <div style={{display:"flex",flexDirection:"column",gap:"20px",alignItems:"center",justifyContent:"center"}}>
            <h1>SignUp</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:"20px"}}>
                <div style={{display:"flex",gap:"20px"}}><span style={{color:"black",paddingTop:"10px"}}>First Name:</span><input type="text" placeholder="Firstname" value={Firstname} onChange={(e)=>setFirstname(e.target.value)} style={{width:"400px"}} required/></div>
                <div style={{display:"flex",gap:"20px"}}><span style={{color:"black",paddingTop:"10px"}}>Last Name:</span><input type="text" placeholder="Lastname" value={Lastname} onChange={(e)=>setLastname(e.target.value)} style={{width:"400px"}} required/></div>
                <div style={{display:"flex",gap:"20px"}}><span style={{color:"black",paddingTop:"10px"}}>Email:</span><input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} style={{width:"400px",marginLeft:"40px"}} required/></div>
                <div style={{display:"flex",gap:"20px"}}><span style={{color:"black",paddingTop:"10px"}}>Password:</span>
                 <input   type={showPassword ? "text" : "password"}  style={{ paddingRight: "30px" ,width:"380px",marginLeft:"10px"}} placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}  required/>
                <span
            onClick={togglePasswordVisibility}
            style={{
              position: "absolute",
              right: "10px",
              top: "35px",
              cursor: "pointer",
            }}
          >
            {/* {showPassword ? <FaEyeSlash /> : <FaEye />} */}
          </span></div>
          <div style={{display:"flex",gap:"20px"}}><span style={{color:"black",paddingTop:"10px"}}>ConfirmPassword</span> <input type="password" placeholder="Re-type your password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} style={{width:"360px"}} required/></div>
              <div style={{display:"flex",gap:"20px"}}> <button type="submit" disabled={loading} style={{width:"200px",marginLeft:"0px"}}>SIGN UP</button> <span style={{marginTop:"25px",color:"black"}}>Already have account<Link to="/login" style={{color:"blue",marginLeft:"5px"}}>Login</Link></span></div> 
            </form>
            {loading && <p>Loading...</p>}
        </div>
    )
}
export default Register_own
