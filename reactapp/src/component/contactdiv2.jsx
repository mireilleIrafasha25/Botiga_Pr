import React from 'react';
import '../styles/contactdiv2.css';
import axios from "axios";
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message1,setMessage1]=useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response=await axios.post("https://botiga-backend.onrender.com/Botiga/contact/add",
       { 
        email,
        name,
        message1,
       }
      );
      setMessage(response.data.message);
      setTimeout(()=>{
        navigate("/contact");
      },1000);
      
    } catch (error) {
      setMessage(error.response?.data?.message|| "Failed to send message");
    }
    finally{
      setLoading(false);
    }
  }
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2 style={{marginBottom:"20px"}}>Leave Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <label style={{marginBottom:"10px"}}>Name <span>*</span></label>
          <div className="name-fields" style={{marginBottom:"20px"}}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="First" required />
            {/* <input type="text" placeholder="Last"   required /> */}
          </div>

          <label style={{marginBottom:"10px"}}>Email <span>*</span></label>
          <input type="email" value={email} placeholder="Your Email" required onChange={(e)=>setEmail(e.target.value)} style={{marginBottom:"20px"}}/>

          <label style={{marginBottom:"10px"}}>Comment or Message</label>
          <textarea placeholder="Your Message" value={message1} onChange={(e)=>setMessage1(e.target.value)} required></textarea>

          <button type="submit" disabled={loading}>{loading? "submitting ...":"Submit"}</button>
        </form>
        {message && <p>{message}</p> }
      </div>
      
      <div style={{marginLeft:"90px"}}>
        <h2 style={{marginBottom:"45px"}}>Our Store</h2>
        <p>501-521 Fashion Ave, New York, NY 10018, USA</p>
        <p><strong>PHONE:</strong> +1 212 244 2681</p>
        <p><strong>E-MAIL:</strong> office@example.org</p>
        
        <h2>Store Hours</h2>
        <p>Sun: Closed</p>
        <p>Mon to Sat: 10 AM – 5:30 PM</p>
      </div>
    </div>
  );
};

export default ContactForm;