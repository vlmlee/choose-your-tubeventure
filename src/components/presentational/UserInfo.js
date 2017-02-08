import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const UserInfo = ({ id, name, creator, createdAt, resetVideo }) => (
    <section className="user-info">
        <p>
            <span className="user-info-section">
                Created
                on <span className="user-date"> {createdAt} </span>
                by <span className="user-name"> {creator} </span>
            </span>
            <Link className="edit-link" to={`/edit/${id}`}>
                Edit Adventure
            </Link>
            <span className="reset-link" onClick={resetVideo}>Reset Video</span>
        </p>
    </section>
);

UserInfo.proptypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    creator: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};

export default UserInfo;
