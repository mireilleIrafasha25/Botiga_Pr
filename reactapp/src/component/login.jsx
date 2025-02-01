import {Link} from "react-router-dom";
const Login=()=>
{
    return (
        <div className="login">
            <h1>Login</h1>
            <form>
                <div>
                <label>Username or email <span style={{color:red}} > *</span></label>
                <input type="text"  required />
                <label>Password <span style={{color:red}}> *</span></label>
                <input type="password" required/>
                <input type="checkbox" /><label>Remember Me</label>
                <button type="submit" style={{backgroundColor:"black",color:"white", width:"50px"}}>Login</button>
                </div>
            </form>
            <div>
           <Link to="/register"><u>Lost your Password</u></Link> 
           </div>
        </div>
    )
}
export default Login;