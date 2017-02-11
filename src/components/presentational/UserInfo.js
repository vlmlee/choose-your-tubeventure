import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const UserInfo = ({ id, creator, createdAt, resetVideo }) => (
    <section className="user-info">
        <span className="user-info-section">
            Created
            on <span className="user-date"> {createdAt} </span>
            by <span className="user-name"> {creator} </span>
        </span>
        <Link className="user-edit-link" to={`/edit/${id}`}>
            Edit Adventure
        </Link>
        <span className="user-reset-link" onClick={resetVideo}>Reset Video</span>
        <p className="user-permalink">Permalink: <a href={"http://www.chooseyourtubeventure.site/view/" + id}> http://www.chooseyourtubeventure.site/view/{id} </a></p>
    </section>
);

UserInfo.proptypes = {
    id: PropTypes.string.isRequired,
    creator: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    resetVideo: PropTypes.func.isRequired,
};

export default UserInfo;
