import React from 'react';
import '../styles/contactdiv2.css';

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2 style={{marginBottom:"20px"}}>Leave Us a Message</h2>
        <form>
          <label style={{marginBottom:"10px"}}>Name <span>*</span></label>
          <div className="name-fields" style={{marginBottom:"20px"}}>
            <input type="text" placeholder="First" required />
            <input type="text" placeholder="Last" required />
          </div>

          <label style={{marginBottom:"10px"}}>Email <span>*</span></label>
          <input type="email" placeholder="Your Email" required style={{marginBottom:"20px"}}/>

          <label style={{marginBottom:"10px"}}>Comment or Message</label>
          <textarea placeholder="Your Message"></textarea>

          <button type="submit">Submit</button>
        </form>
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