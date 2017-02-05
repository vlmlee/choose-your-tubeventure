import React, { PropTypes } from 'react';

const AdventureInfo = ({ name, author }) => (
    <section>
        <h1>{name}</h1>
        <h1>{author}</h1>
    </section>
);

AdventureInfo.propTypes = {
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};

AdventureInfo.defaultProps = {
    name: 'Michael',
    author: 'Lee',
};

export default AdventureInfo;
