import React from 'react';
import PropTypes from 'prop-types';
//import './FollowersButton.css';
import './uicons-bold-rounded/css/uicons-bold-rounded.css';

const FollowersButton = ({ seguidores }) => {
  return (
    <button className="followers-button flex items-center p-2 bg-white border border-gray-300 rounded cursor-pointer transition duration-300 hover:bg-gray-100 same-height-button">
   <i className="fi fi-br-users-alt followers-icon w-5 h-5 mr-2 text-gray-400"></i>
    <span className="followers-count border-l-2 pl-2 text-gray-400">{seguidores}</span>
</button>

  )
}
FollowersButton.propTypes = {
  seguidores: PropTypes.number.isRequired,
};

export default FollowersButton;
