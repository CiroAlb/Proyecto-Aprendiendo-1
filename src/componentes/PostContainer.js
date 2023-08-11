import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PostComponent from './PostComponent';
import './PostContainer.css';
import './uicons-bold-rounded/css/uicons-bold-rounded.css';

const PostContainer = ({ name, posts }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  // Si el array 'posts' está vacío, no renderizar el componente
  if (posts.length === 0) {
    return null;
  }

  return (
    <div
      className={`post-container ${expanded ? 'expanded' : ''}`}
      onClick={toggleExpansion}
    >
      <div className="post-header">
        <strong className="post-name">{name}</strong>
        <div className="post-info">
          <span className="post-count">{posts.length}</span>
          <i
            className={`expand-icon fi fi-br-angle-right`}
          />
        </div>
      </div>
      {expanded && (
        <div className="post-list">
          {posts.map((post, index) => (
            <PostComponent key={index} name={post.name} post={post.post} />
          ))}
        </div>
      )}
    </div>
  );
};

PostContainer.propTypes = {
  name: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      post: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PostContainer;
