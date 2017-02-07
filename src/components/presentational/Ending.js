import React, { PropTypes } from 'react';
import Collapse, { Panel } from 'rc-collapse';

const Ending = ({
    index,
    id,
    name,
    startTime,
    pauseTime,
    editMode,
    choices,
    addChoice,
    removeChoice,
    addPauseTime,
    addStartAndPauseTime,
    handleBpNameChange,
    handleChoiceChange,
    handleEditMode,
    handleEndEditMode
}) => (
    <section className="decision">
        <section>
            <section className="decision-description">
                { editMode === id ?
                    ( <input type="text"
                        className="choice-pause"
                        onKeyPress={(e) => handleEndEditMode(e, index)}
                        onChange={(index ? (e) => addStartAndPauseTime(e, index) : (e) => addPauseTime(e, index))}
                        placeholder="Enter the time (MM:SS or seconds) in which to pause for choices." /> )
                : <section onClick={() => handleEditMode(index)}>
                    <span className="breakpoint-type">{ index ? 'Decision' : 'Start' }: [{index ? startTime : 0 }, {pauseTime}]</span>
                    { pauseTime !== '' || <span> &#8592; Click here to set a { index ? 'start and' : '' } pause time - [startTime, pauseTime] </span> }
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
                            header={j.heading + ' ' + (j_index+1)}>
                            { j.editMode === j.id ?
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

Ending.propTypes = {
    index: PropTypes.number.isRequired,
    choices: PropTypes.array.isRequired,
};

export default Ending;
