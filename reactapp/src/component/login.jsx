import {Link} from "react-router-dom";
const Login=()=>
{
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
           
            <form>
               <div> <label style={{fontFamily:"Overlock,display",fontWeight:"unset"}}>Username or email <span style={{color:"red"}} > *</span></label>
                <input type="email"  required style={{
                marginTop: "15px",
                backgroundColor: "white",
                color: "black",
                padding: "10px",
                borderRadius: "5px",
                height:"30px",
                width:"250px"}}  className="eml" /></div>
                <div><label style={{marginTop:"15px",fontFamily:"Overlock,display",fontWeight:"unset"}}>Password <span style={{color:"red"}}> *</span></label>
                <input type="password" required    style={{
                marginTop: "15px",
                backgroundColor: "white",
                color: "black",
                padding: "10px",
                borderRadius: "5px",
                height:"30px",
                width:"250px"
              }} className="pass" /></div>
                <div style={{display:"flex",marginTop:"15px",gap:"20px",}}><label><input type="checkbox"/></label><label style={{fontFamily:"Overlock,display",fontWeight:"unset"}}>Remember me</label></div>
               <div> <button type="submit" style={{marginTop:"15px",backgroundColor:"#112",width:"100px",height:"40px",textAlign:"center",fontFamily:"Overlock,display"}}>LOG IN</button></div>
               <div><Link to="/newPassword" style={{color:"black",fontFamily:"Overlock,display"}}> <u>Lost your password</u></Link></div>
                
            </form>
            </div>
           
        </div>
    )
}
export default Login;