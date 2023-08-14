import React from 'react';
import PropTypes from 'prop-types';
//import './PostComponent.css'; // Estilo para el componente

const PostComponent = ({ name, post }) => {
  return (
    <div className="post-container border-t-2 p-4 mb-4 mx-auto bg-white rounded shadow-md transition duration-300 hover:bg-gray-100">
    <div className="post-header pb-2">
      <strong className="post-name text-xl font-semibold">{name}</strong>
    </div>
    <div className="post-content mt-2">
      <p className="post-text leading-relaxed">{post}</p>
    </div>
  </div>
  
  );
};

PostComponent.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    post: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostComponent;
