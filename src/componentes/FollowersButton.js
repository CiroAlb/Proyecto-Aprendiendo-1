import React from 'react';
import PropTypes from 'prop-types';
import './FollowersButton.css';
import  './uicons-bold-rounded/css/uicons-bold-rounded.css'

const FollowersButton = ({ seguidores }) => {
  return (
    <button className="followers-button">
      <i className="fi fi-br-users-alt followers-icon"></i>
      <span className="followers-count">{seguidores}</span>
    </button>
  );
};

FollowersButton.propTypes = {
  seguidores: PropTypes.number.isRequired,
};

export default FollowersButton;