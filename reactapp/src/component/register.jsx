import {Link} from "react-router-dom";
const Register=()=>
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
        <div style={{marginLeft:"20px",marginBottom:"20px",marginTop:"10px"}}>
             <h2 style={{fontFamily:"Overlock,display"}}>Register</h2>
            <div className="login" style={{display:"inline-block",alignItems:"center",justifyContent:"center",border:"2px solid white",borderRadius:"10px",
                paddingLeft:"50px",paddingRight:"0px",
                width:"400px",paddingTop:"60px",paddingBottom:"60px",background:"white"
            }}>
           
            <form>
               <div> <label style={{fontFamily:"Overlock,display",fontWeight:"unset"}}>Email address <span style={{color:"red"}} > *</span></label>
                <input type="email"  required style={{
                marginTop: "15px",
                backgroundColor: "white",
                color: "black",
                padding: "10px",
                borderRadius: "5px",
                height:"30px",
                width:"250px"}}  className="eml" /></div>
                <div style={{
                    fontFamily:"Overlock,display",
                marginTop: "30px",
                backgroundColor: "white",
                color: "black",
                padding: "0px",
                borderRadius: "5px",
                marginBottom:"30px",
                height:"30px",
                width:"350px"}}>A link to set a new password will be sent to your email address</div>
                <div style={{ 
    marginTop: "15px", 
    display: "flex", 
    flexDirection:"column",
    gap: "10px" 
}}>
    <label style={{ fontFamily: "Overlock, display", display: "flex", alignItems: "center", gap: "5px" ,fontWeight:"unset"}}>
        <input type="radio" name="user" value="customer" required checked style={{ border: "none", width: "16px", height: "16px" }} />
        I am a customer
    </label>
    <label style={{ fontFamily: "Overlock, display", display: "flex", alignItems: "center", gap: "5px" ,fontWeight:"unset"}}>
        <input type="radio" name="user" value="vendor" required style={{ border: "none", width: "16px", height: "16px" }} />
        I am a vendor
    </label>
</div>

               <div> <button type="submit" style={{marginTop:"30px",backgroundColor:"#112",width:"120px",height:"40px",textAlign:"center",fontFamily:"Overlock,display"}}>REGISTER</button></div>
                
            </form>
            </div>
           
        </div>
    )
}
export default Register;