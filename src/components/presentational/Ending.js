import React, { PropTypes } from 'react';
import Collapse, { Panel } from 'rc-collapse';

const Ending = ({ index, choices }) => (
    <section className="ending">
        <h1>Ending: interval between _ and _</h1>
        <input
            className="" />
        <Collapse
            className="collapse"
            accordion={false}>
            { choices.length >= 0 &&
                ( choices.map((j, j_index) => (
                    <Panel key={j_index}
                        className="panel"
                        header={j.heading + ' ' + index}>
                        <p></p>
                    </Panel> ))
            )}
        </Collapse>
    </section>
);


export default Ending;
