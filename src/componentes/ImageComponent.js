import React from 'react';
import PropTypes from 'prop-types';
//import './ImageComponent.css'; // Importa el archivo de estilos

const ImageComponent = ({ imageUrl }) => {
  return (
<div className="image-container w-4/5 mt-5 relative">
  <div
    style={{
      width: '100%',
      paddingBottom: '100%',
      position: 'relative',
      borderRadius: '10px', // Agrega bordes redondeados
      overflow: 'hidden', // Oculta cualquier contenido que se desborde del contenedor
    }}
  >
    <img
      src={imageUrl}
      alt="Imagen"
      className="absolute w-full h-full object-cover"
    />
  </div>
</div>

  );
};

ImageComponent.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default ImageComponent;
