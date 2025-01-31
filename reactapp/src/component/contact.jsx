import ContactForm from "./contactdiv2";
const Contact = () => {
    return (
        <div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.53268484482!2d30.08825227240952!3d-1.939479936683539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6bf81ce491f%3A0xd8377a6f4534fd79!2s336Q%2B8R7%2C%20KG%20573%20St%2C%20Kigali!5e0!3m2!1sen!2srw!4v1738306039346!5m2!1sen!2srw" 
                width="95%" 
                height="450" 
                style={{ border: 0 ,marginTop:"30px",marginLeft:"30px" }} 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>  
            <ContactForm />
        </div>
    );
};

export default Contact;
