import React, { PropTypes } from 'react';

const AdventureForm = ({ createAdventure, handleNameChange, createCollapsable, youtubeId }) => (
    <section className="adventure-form">
        <section className="adventure-info">
            <input type="text"
                className="adventure-form-input"
                onChange={handleNameChange}
                placeholder="Enter a name" />
            <input type="text"
                className="adventure-form-input"
                onChange={handleNameChange}
                placeholder="Created by" />
            <input type="text"
                className="adventure-form-input"
                onChange={handleNameChange}
                placeholder="Enter a description" />
            <input type="text"
                className="adventure-form-input"
                onChange={handleNameChange}
                placeholder="Youtube ID"
                value={"Youtube ID: " + youtubeId} />
        </section>
        <input type="button"
            className="adventure-form-submit"
            onClick={createAdventure}
            value="CREATE ADVENTURE" />
        <input type="button"
            className="adventure-form-submit"
            onClick={createCollapsable}
            value="ADD EXTENSION" />
    </section>
);

AdventureForm.propTypes = {
    createAdventure: PropTypes.func.isRequired,
    handleNameChange: PropTypes.func.isRequired,
    createCollapsable: PropTypes.func.isRequired,
    youtubeId: PropTypes.string.isRequired,
};

export default AdventureForm;
