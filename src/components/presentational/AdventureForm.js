import React, { PropTypes } from 'react';

const AdventureForm = ({
    createAdventure,
    handleNameChange,
    createBreakpoint,
    createEnding,
    youtubeId
}) => (
    <section className="adventure-form">
        <section className="adventure-info">
            <input type="text"
                className="adventure-form-input"
                onChange={handleNameChange}
                placeholder="Enter a name for this adventure" />
            <input type="text"
                className="adventure-form-input"
                onChange={handleNameChange}
                placeholder="Created by" />
            <input type="text"
                className="adventure-form-input"
                onChange={handleNameChange}
                placeholder="Add a description" />
            <input type="text"
                className="adventure-form-input adventure-form-italic"
                onChange={handleNameChange}
                placeholder="Youtube ID"
                value={"Youtube ID: " + youtubeId} />
        </section>
        <input type="button"
            className="adventure-form-submit"
            onClick={createBreakpoint}
            value="ADD BREAKPOINT+" />
        <input type="button"
            className="adventure-form-submit"
            onClick={createEnding}
            value="ADD ENDING+" />
        <input type="button"
            className="adventure-form-submit adventure-form-create"
            onClick={createAdventure}
            value="CREATE ADVENTURE" />
    </section>
);

AdventureForm.propTypes = {
    createAdventure: PropTypes.func.isRequired,
    handleNameChange: PropTypes.func.isRequired,
    youtubeId: PropTypes.string.isRequired,
};

export default AdventureForm;
