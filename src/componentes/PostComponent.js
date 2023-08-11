import React from 'react';
import PropTypes from 'prop-types';
import './PostComponent.css'; // Estilo para el componente

const PostComponent = ({ name, post }) => {
    return (
      <div className="post-container">
        <div className="post-header">
          <strong className="post-name">{name}</strong>
        </div>
        <div className="post-content">
          <p className="post-text">{post}</p>
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