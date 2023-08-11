import React, { useState } from 'react';
import './FollowButton.css';
import  './uicons-bold-rounded/css/uicons-bold-rounded.css'

const FollowButton = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleButtonClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <button
      className={`follow-button ${isFollowing ? 'following' : ''}`}
      onClick={handleButtonClick}
    >
      {isFollowing ? (
        <>
          <i className="fi fi-br-settings"></i>
          <span>Settings</span>
        </>
      ) : (
        'Follow'
      )}
    </button>
  );
};

export default FollowButton;
