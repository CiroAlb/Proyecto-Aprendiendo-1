import React from 'react';
import PropTypes from 'prop-types';

const MemberSince = ({ date }) => {
  const formattedDate = new Date(date).toLocaleString('default', { month: 'long', year: 'numeric' });

  return (
    <p className="text-gray-500">
      Miembro desde {formattedDate}
    </p>
  );
};

MemberSince.propTypes = {
  date: PropTypes.string.isRequired,
};

export default MemberSince;