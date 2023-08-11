import React from 'react';
import PropTypes from 'prop-types';
import './ImageComponent.css'; // Importa el archivo de estilos

const ImageComponent = ({ imageUrl }) => {
  return (
    <div className="image-container">
      <img src={imageUrl} alt="Imagen" className="image" />
    </div>
  );
};

ImageComponent.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default ImageComponent;
