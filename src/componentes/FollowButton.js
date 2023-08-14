import React, { useState } from 'react';
//import './FollowButton.css';
import './uicons-bold-rounded/css/uicons-bold-rounded.css';

const FollowButton = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleButtonClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <button
    className={`follow-button ${
      isFollowing
        ? 'bg-gray-300 text-gray-600'
        : 'bg-orange-500 hover:bg-orange-600 text-white'
    } text-xl px-6 py-1 rounded-lg same-height-button`} // Agregado el estilo de bordes redondeados y clase de altura común
    onClick={handleButtonClick}
  >
     {isFollowing ? (
      <span className="flex items-center">
        <i className="fi fi-br-settings w-6 h-6 mr-2"></i>
        <span>Settings</span>
      </span>
    ) : (
      'Follow'
    )}
  </button>

  );
};

export default FollowButton;
