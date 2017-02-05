import React, { PropTypes } from 'react';

const CreateInput = ({handleLinkChange, youtubeId}) => (
    <section>
        <h1> Create an Adventure </h1>
        <input type="text"
            className="search-input"
            onChange={handleLinkChange}
            placeholder="Enter in a youtube link"
            value={youtubeId} />
    </section>
);

CreateInput.propTypes = {
    handleLinkChange: PropTypes.func.isRequired,
    youtubeId: PropTypes.string.isRequired,
};

export default CreateInput;
