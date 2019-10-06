import React from 'react';
import PropTypes from 'prop-types';

function User(user, avatar) {
  return (
    <div>
      <h3>{user}</h3>
      <span>
        <img src={avatar}/>
      </span>
    </div>

  );
}

User.propTypes = {
  user: PropTypes.string,
  userID: PropTypes.string,
  avatar: PropTypes.string
};

export default User;
