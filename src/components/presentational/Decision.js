import React, { PropTypes } from 'react';
import Collapse, { Panel } from 'rc-collapse';

const Decision = ({
    index,
    pauseTime,
    editMode,
    choices,
    addChoice,
    removeChoice,
    addPauseTime,
    handleChoiceChange,
    handleEditMode,
    handleEndEditMode
}) => (
    <section className="decision">
        <section>
            <section className="decision-description">
                { editMode ?
                    ( <input type="text"
                        className="choice-pause"
                        onKeyPress={(e) => handleEndEditMode(e, index)}
                        onChange={(e) => addPauseTime(e, index)}
                        placeholder="Enter the time (MM:SS or seconds) in which to pause for choices."
                        value={pauseTime} /> )
                : <section onClick={(e) => handleEditMode(index)}>
                    <span className="breakpoint-type">{ index === 0 ? 'Start' : 'Decision' }: [{index === 0 ? 0 : pauseTime}, {pauseTime}]</span>
                    { pauseTime !== '' || <span> &#8592; Click here to set a pause time - [startTime, pauseTime] </span> }
                </section> }
            </section>
            <input type="button"
                className="choice-button"
                onClick={() => addChoice(index)}
                value="ADD CHOICE+" />
            <Collapse
                className="collapse"
                accordion={false}>
                { choices.length >= 0 &&
                    ( choices.map((j, j_index) => (
                        <Panel key={j_index}
                            className="panel"
                            header={"Choice " + (j_index+1)}>
                            { j.editMode ?
                                ( <textarea
                                    className="choice-input"
                                    onKeyPress={(e) => handleEndEditMode(e, index, j.id)}
                                    onChange={(e) => handleChoiceChange(e, index, j_index)}
                                    placeholder="Enter a description for this choice"
                                    value={j.description} /> )
                            : <div className="choice-description"
                                onClick={() => handleEditMode(index, j_index)}>
                                <span className="choice-description-editable">
                                    Description: </span>{j.description}
                            </div> }
                            <input type="button"
                                className="choice-button choice-button-remove"
                                onClick={() => removeChoice(index, j_index)}
                                value="DELETE CHOICE&mdash;" />
                        </Panel> ))
                )}
            </Collapse>
        </section>
    </section>
);

Decision.propTypes = {
    choices: PropTypes.array.isRequired,
};

export default Decision;
