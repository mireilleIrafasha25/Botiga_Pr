import React, { useState } from 'react';

const ImageGallery = () => {
  const images = [
    '/boat.jpg',
    '/bootle.jpg',
    '/duis.jpg',
    '/fusce.jpg',
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  const galleryContainerStyle = {
    width: '80%',
    margin: '0 auto',
    textAlign: 'center',
  };

  const mainImageStyle = {
    width: '100%',
    maxWidth: '600px',
    border: '2px solid black',
    marginBottom: '20px',
  };

  const thumbnailsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  };

  const thumbnailStyle = (isActive) => ({
    width: '100px',
    height: '80px',
    objectFit: 'cover',
    cursor: 'pointer',
    border: isActive ? '2px solid chocolate' : '2px solid transparent',
    transition: 'transform 0.3s ease, border 0.3s ease',
  });

  return (
    <div style={galleryContainerStyle}>
      <div className="main-image">
        <img src={mainImage} alt="Main" style={mainImageStyle} />
      </div>
      <div style={thumbnailsContainerStyle}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setMainImage(image)}
            style={thumbnailStyle(mainImage === image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
