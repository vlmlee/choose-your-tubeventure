import React, { PropTypes } from 'react';

const EditQuestion = ({ handleMagicWord, tryMagicWord }) => (
    <section>
        <h1 className="edit-question">What's the secret word?</h1>
        <input type="password"
            className="create-input"
            onChange={handleMagicWord}
            onKeyPress={tryMagicWord}
            placeholder="" />
    </section>
);

EditQuestion.propTypes = {
    handleMagicWord: PropTypes.func.isRequired,
    tryMagicWord: PropTypes.func.isRequired,
};

export default EditQuestion;
