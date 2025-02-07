import React, { useState } from 'react';
import '../styles/vendordiv1.css';

const stores = [
    { name: "John Doe's Store", rating: 5, location: "Central Park, New York, United States (US)", image: "/JohnDoeStore.jpg", circleImage: "/JohnDoeStore.jpg",sign:">" },
    { name: "Jessica's Store", rating: 4, location: "Central Park, New York, United States (US)", image: "/JessicaStore.jpg", circleImage: "/JessicaStore.jpg", sign:">" },
    { name: "Santa Monica's Store", rating: 5, location: "Central Park,New York, United States (US)", image: "/SantaStore.jpg", circleImage: "/SantaStore.jpg" , sign:">" }
  ];

const VendorHomediv1 = () => {
//   const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="vendor-ui">
      <div className="store-list">
        {stores.map((store, index) => (
            
          <div className="store-card" key={index}> 
            <div className="store-image"><img src={store.image}/></div>
              {/* <div className="circle-image" style={{ backgroundImage: `url(${store.circleImage})` ,marginTop:"120px"}}></div> */}
              <div className="store-info">
              <h3>{store.name}</h3>
              <div className="rating">{'★'.repeat(store.rating)}{'☆'.repeat(5 - store.rating)}</div>
              <p>{store.location}</p>
              <div>
            <button className="navigate-btn" >{store.sign}</button>  
            </div>
            </div>
            
            
            
            
          </div>
       
          
        ))}
      </div>
    </div>
  );
};

export default VendorHomediv1;
