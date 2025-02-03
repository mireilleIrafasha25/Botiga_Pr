import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register_own=()=>
{
    const [Firstname,setFirstname] =useState("");
    const [Lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     const [message, setMessage] = useState("");
     const [loading, setLoading] = useState(false);
     const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

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
        <div>
            <h1>SignUp</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Firstname" value={Firstname} onChange={(e)=>setFirstname(e.target.value)} required/>
                <input type="text" placeholder="Lastname" value={Lastname} onChange={(e)=>setLastname(e.target.value)} required/>
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                <input type="password" placeholder="ConfirmPassword" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required/>
                <button type="submit" disabled={loading}>SIGN UP</button>
            </form>
            {loading && <p>Loading...</p>}
        </div>
    )
}
export default Register_own
