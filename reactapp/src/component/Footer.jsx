import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MoveLeft, X } from "lucide-react"; // For the X icon
import { FaPaypal, FaCcMastercard, FaGooglePay, FaApplePay, FaCcVisa } from "react-icons/fa";
import "../styles/footer.css"
const Footer = () => {
    
  return (
    
        <div className="Wholefooter">
        {/* leftside */}
        <div className="leftside" style={{
            margin:"20px"
   
        }}>
            <div><h2>Stay Up to Date</h2></div>
           <div> <p>Subscribe to our newsletter and get 20% discount offer in your first order.</p></div>
           <div className="EmailandSubmit" style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 0",
            gap: "40px"
           }}><input type="email" placeholder="Enter your Email" style={{
            color:"white",
            backgroundColor:"black",
            border:"none",
            color:"white"
           }} />
           <button className="button1" style={{
            backgroundColor:"black",
            color:"white",
            border:"none",
            }}>Subscribe</button>
           
           </div>
           <hr />
           <div className="wholeshopcompanyabout" style={{
            display:"flex",
            gap:"20px",
            margin:"0 0 0 0",
           }}>
            <div className="shop">
                <div>
                    
                    <ul style={{
                        listStyle:"none"
                    }}>
                        <li><h1>Shop</h1></li>
                        <li>Body Lotion</li>
                        <li>Skincare</li>
                        <li>Fragrances</li>
                        <li>Hair Care</li>
                        <li>Makeup</li>
                        <li>Nail Care</li>
                        <li>Bath & Body</li>
                        <li>Tools & Accessories</li>
                    </ul>
                </div>
            </div>
            <div className="company">
                <div>
                   
                    <ul style={{
                        listStyle:"none"
                    }}>
                        <li><h1>Company</h1></li>
                        <li>About Us</li>
                        <li>Press</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className="about">
                <div style={{display:"inline"}}>
                    
                    <ul style={{
                        listStyle:"none"
                    }}>
                        <li><h1>About</h1></li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Returns & Exchanges</li>
                        <li>Shipping & Delivery</li>
                    </ul>
               </div>
            </div>
           </div>
        </div>
        {/* Rightside */}
        <div className="rightside">
            <div className="happytohelp">
                <h1>Happy to help</h1>
            </div>
            <div className="contactinfo" style={{
                marginTop: '10px',
            }}>
            1279 Thorn Street, NY <br />
            Phone: 307-549-2480 <br />
            Mail: <a href="mailto:demo@gmail.com" className="underline">demo@gmail.com</a>
            </div>
            <div className="socialmediaicons" style={{
                  display: "flex",
                  gap: "1rem",
                  color: "white",
                  marginTop:"1.5rem" 
            }}>
            <FaFacebookF />
            <FaLinkedinIn />
             <FaInstagram />
             </div>
            <div className="acceptfor"><h1>Accept For</h1></div>
        <div className="paymentmethods" style={{
             display: 'flex',
             gap: '1rem',       
             marginTop: '0.5rem', 
             fontSize: '1.875rem',
        }}>
             <FaPaypal />
             <FaCcMastercard />
             <FaGooglePay />
             <FaApplePay />
            <FaCcVisa />
               </div>
        </div>
        </div>
    
    // <footer className="bg-black text-white p-10">
    //   <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
    //     {/* Left Section */}
    //     <div className="md:w-1/2 space-y-4">
    //       <h2 className="text-2xl font-bold">Stay up to date</h2>
    //       <p className="text-gray-400">Subscribe to our newsletter and get 20% discount offer in your first order.</p>
    //       <div className="relative">
    //         <input
    //           type="email"
    //           placeholder="Enter your email"
    //           className="w-full bg-black border-b border-gray-500 py-2 text-white outline-none placeholder-gray-500"
    //         />
    //         <button className="absolute right-0 bottom-0 text-white font-semibold">SUBMIT</button>
    //       </div>
    //     </div>

    //     {/* Right Section */}
    //     <div className="md:w-1/2 space-y-4">
    //       <h2 className="text-2xl font-bold text-right">Happy to help</h2>
    //       <p className="text-gray-400 text-right">
    //         1279 Thorn Street, NY <br />
    //         Phone: 307-549-2480 <br />
    //         Mail: <a href="mailto:demo@gmail.com" className="underline">demo@gmail.com</a>
    //       </p>
    //       <div className="flex justify-end space-x-4 text-white text-lg">
    //         <FaFacebookF />
    //         <X />
    //         <FaLinkedinIn />
    //         <FaInstagram />
    //       </div>
    //     </div>
    //   </div>

    //   <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
    //     {/* Footer Links */}
    //     <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-20">
    //       <div>
    //         <h3 className="font-bold text-white">SHOP</h3>
    //         <ul className="space-y-1">
    //           <li>Body Lotion</li>
    //           <li>Computer Gadget</li>
    //           <li>Electronics</li>
    //           <li>Fashion</li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h3 className="font-bold text-white">COMPANY</h3>
    //         <ul className="space-y-1">
    //           <li>About</li>
    //           <li>Careers</li>
    //           <li>Help</li>
    //           <li>Contact</li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h3 className="font-bold text-white">ABOUT</h3>
    //         <ul className="space-y-1">
    //           <li>Who We Are</li>
    //           <li>Reviews</li>
    //           <li>Contact</li>
    //         </ul>
    //       </div>
    //     </div>

    //     {/* Payment Icons */}
    //     <div className="mt-6 md:mt-0">
    //       <h3 className="font-bold text-white">ACCEPT FOR</h3>
    //       <div className="flex space-x-4 mt-2 text-3xl">
    //         <FaPaypal />
    //         <FaCcMastercard />
    //         <FaGooglePay />
    //         <FaApplePay />
    //         <FaCcVisa />
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  )
};

export default Footer;
