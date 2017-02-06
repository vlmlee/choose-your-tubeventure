import React, { PropTypes } from 'react';

const AdventureForm = ({
    name,
    creator,
    description,
    youtubeId,
    handleNameChange,
    handleCreatorChange,
    handleDescChange,
    handleSecretChange,
    createBreakpoint,
    createEnding,
    createAdventure
}) => (
    <section className="adventure-form">
        <section className="adventure-info">
            <input type="text"
                className="adventure-form-input"
                onChange={handleNameChange}
                placeholder="Enter a name for this adventure"
                value={name} />
            <input type="text"
                className="adventure-form-input"
                onChange={handleCreatorChange}
                placeholder="Created by"
                value={creator} />
            <input type="text"
                className="adventure-form-input"
                onChange={handleDescChange}
                placeholder="Add a description"
                value={description} />
            <input type="text"
                readOnly
                className="adventure-form-input adventure-form-youtube"
                placeholder="Youtube ID"
                value={"Youtube ID: " + youtubeId} />
            <input type="password"
                className="adventure-form-input adventure-form-secret"
                onChange={handleSecretChange}
                placeholder="Enter a secret word" />
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
