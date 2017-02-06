import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Collapse, { Panel } from 'rc-collapse';
import Header from '../presentational/Header.js';
import AdventureForm from '../presentational/AdventureForm.js';
import _ from 'underscore';
import 'rc-collapse/assets/index.css';

export default class Create extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            creator: '',
            secret: '',
            confirmSecret: '',
            youtubeId: '',
            start: { },
            decisions: [],
            end: { },
            activeKey: ['4'],
        };

        this.handleUserInfo = this.handleUserInfo.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.addStart = this.addStart.bind(this);
        this.addDecision = this.addDecision.bind(this);
        this.removeDecision = this.removeDecision.bind(this);
        this.addEnding = this.addEnding.bind(this);
        this.removeEnding = this.removeEnding.bind(this);
        this.createAdventure = this.createAdventure.bind(this);
        this.handleActivePanel = this.handleActivePanel.bind(this);
        this.createCollapsable = this.createCollapsable.bind(this);
        this.playtest = this.playtest.bind(this);
        this.autosave = this.autosave.bind(this);
        this.throttleAutosave = this.throttleAutosave.bind(this);
    }

    componentDidMount() {
        this.setState({ youtubeId: this.props.params.id });
    }

    handleUserInfo() {

    }

    handleNameChange() {

    }

    addStart() {

    }

    addDecision() {

    }

    removeDecision() {

    }

    addEnding() {

    }

    removeEnding() {

    }

    createAdventure(e) {
        e.preventDefault();

        const opts = {
            method: 'POST',
            body: JSON.stringify({ }),
            headers: { "Content-Type": "application/json",
                "Accept": "application/json" }
        };

        fetch('http://localhost:9001/adventure/' + this.props.params.id, opts);
    }

    handleActivePanel(activeKey) {
        this.setState({
            activeKey,
        });
    }

    createCollapsable() {
        let decisions = this.state.decisions;
        decisions.push({
            name: 'name',
            heading: 'heading',
        });
        console.log(this.state.decisions);
        this.setState({
            decisions: decisions
        });
    }

    playtest() {

    }

    autosave() {

    }

    throttleAutosave() {
        this.autosave = this.autosave || _.throttle(state => {
            // save state with fetch();
        }, 5000);
    }

    render() {
        return (
            <section>
                <Header text="CREATE STORYBOARD" />

                <AdventureForm createAdventure={this.createAdventure}
                    handleNameChange={this.handleNameChange}
                    createCollapsable={this.createCollapsable}
                    youtubeId={this.props.params.id} />

                <section className="collapsable-section">
                    { this.state.decisions.length > 0 &&
                        ( this.state.decisions.map((i, index) => (
                            <Collapse key={index}
                                className="collapse"
                                accordion={false}>
                                <Panel key={index}
                                    className="panel"
                                    header={i.heading}>
                                    <p>Hello</p>
                                </Panel>
                            </Collapse> ))
                        )}
                </section>

                <Collapse
                    className="collapse"
                    accordion={false} >
                    <Panel key="1"
                        header={`This is panel 1`}>
                        <p className="inner-text">Hello</p>
                        <Collapse
                            defaultActiveKey="1">
                            <Panel header={`This is panel nest panel`} key="1">
                                <p className="inner-text">Hello</p>
                            </Panel>
                            <Panel header={`This is panel nest panel`} key="2">
                                <p>Hello</p>
                            </Panel>
                        </Collapse>
                    </Panel>
                    <Panel  key="2"
                        header={`This is panel 2`} >
                        <p>Hello</p>
                    </Panel>
                </Collapse>
                <Collapse
                    className="collapse"
                    accordion={false} >
                    <Panel key="1"
                        header={`This is panel 1`}>
                        <p className="inner-text">Hello</p>
                        <Collapse
                            className="collapse"
                            defaultActiveKey="1">
                            <Panel header={`This is panel nest panel`} key="1">
                                <p className="inner-text">Hello</p>
                            </Panel>
                            <Panel header={`This is panel nest panel`} key="2">
                                <p>Hello</p>
                            </Panel>
                        </Collapse>
                    </Panel>
                    <Panel  key="2"
                        header={`This is panel 2`} >
                        <p>Hello</p>
                    </Panel>
                </Collapse>
            </section>
        );
    }
}
