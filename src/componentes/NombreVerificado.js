import React from 'react';
import PropTypes from 'prop-types';
//import './NombreVerificado.css'; // Importa el archivo de estilos
import './uicons-bold-rounded/css/uicons-bold-rounded.css';

const NombreVerificado = ({ name, isVerified }) => {
  return (
    <div className="nombre-verificado flex items-center">
  <span className="name text-3xl font-semibold capitalize">{name}</span>
  {isVerified && (
    <i className="fi fi-br-badge-check verified-icon text-orange-500 text-2xl" style={{ marginLeft: '10px', marginTop: '9px' }}></i>
  )}
</div>
  );
};

NombreVerificado.propTypes = {
  name: PropTypes.string.isRequired,
  isVerified: PropTypes.bool.isRequired,
};

export default NombreVerificado;
