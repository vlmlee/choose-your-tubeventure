import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Collapse, { Panel } from 'rc-collapse';
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
            decision: '',
            choices: '',
            activeKey: ['4'],
        };

        this.handleUserInfo = this.handleUserInfo.bind(this);
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
        const form = new FormData(ReactDOM.findDOMNode(this.refs.form));

        const opts = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: form,
            cache: 'default'
        };

        fetch('http://localhost:9001/adventure/' + this.props.params.id, opts);
    }

    handleActivePanel(activeKey) {
        this.setState({
            activeKey,
        });
    }

    createCollapsable() {
        return (
            <Collapse className="collapse"
                accordion={false}>
                <Panel header={`This is panel nest panel`} key="1">
                </Panel>
            </Collapse>
        );
    }

    playtest() {

    }

    autosave() {

    }

    throttleAutosave() {

    }

    render() {
        return (
            <section>
                <p>{this.state.youtubeId}</p>
                <h1>Create Storyboard</h1>
                <form className="adventure-form"
                    onSubmit={this.createAdventure}>
                    <input
                        type="text"
                        onChange={this.handleNameChange}
                        defaultValue="Enter a name" />
                    <input
                        type="button"
                        value="Create Storyboard" />
                </form>
                <input
                    type="button"
                    onClick={this.createCollapsable}
                    value="Add extension" />
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
