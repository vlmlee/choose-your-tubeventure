import React, { PropTypes } from 'react';

const CreateSection = ({handleLinkChange, youtubeId}) => (
    <section className="create-section">
        <h1 className="create-section-h1">
            Create an Adventure
        </h1>
        <input type="text"
            className="input"
            onChange={handleLinkChange}
            placeholder="Enter in a youtube link"
            value={youtubeId} />
    </section>
);

CreateSection.propTypes = {
    handleLinkChange: PropTypes.func.isRequired,
    youtubeId: PropTypes.string.isRequired,
};

export default CreateSection;
