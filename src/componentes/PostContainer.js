import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PostComponent from './PostComponent';
//import './PostContainer.css'; // Mantenemos los estilos locales aquí
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
  className={`post-container ${expanded ? 'bg-white' : ''} ${expanded ? 'text-orange-500' : ''} w-full border-t-2 py-3 hover:bg-slate-100 hover:text-orange-500`}
  onClick={toggleExpansion}
>
  <div className="post-header flex justify-between items-center">
    <strong className="post-name text-2xl font-semibold pl-4">{name}</strong>
    <div className="post-info flex items-center">
      <span className="post-count font-semibold text-2xl">{posts.length}</span>
      <i className={`expand-icon fi fi-br-angle-right w-5 h-5 transition-transform duration-300 ${expanded ? 'transform rotate-90' : ''} pr-5`} />
    </div>
  </div>
  {expanded && (
    <div className="post-list mt-2">
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
