import React, { PropTypes } from 'react';

const UserInfo = ({ name, creator, createdAt }) => (
    <section>
        <h1>{name}</h1>
        <h2>{creator}</h2>
        <h2>{createdAt}</h2>
    </section>
);

UserInfo.proptypes = {
    name: PropTypes.string.isRequired,
    creator: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};

export default UserInfo;
