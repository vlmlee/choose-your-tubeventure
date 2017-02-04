import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Create extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            creator: '',
            secret: '',
            confirmSecret: '',
            decision: '',
            choices: '',
        };

        this.handleUserInfo = this.handleUserInfo.bind(this);
        this.addStart = this.addStart.bind(this);
        this.addDecision = this.addDecision.bind(this);
        this.removeDecision = this.removeDecision.bind(this);
        this.addEnding = this.addEnding.bind(this);
        this.removeEnding = this.removeEnding.bind(this);
        this.createAdventure = this.createAdventure.bind(this);
        this.playtest = this.playtest.bind(this);
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

    createAdventure() {
        const form = new FormData(ReactDOM.findDOMNode(this.refs.form));

        const opts = {
            method: 'POST',
            headers: { "Content-Type", "application/json" },
            body: form,
            cache: 'default'
        };

        fetch('http://localhost:9001/adventure/' + this.props.params.id, opts);
    }

    playtest() {

    }

    render() {
        return (
            <section>
                <h1>Creation Form</h1>
                <form className="adventure-form"
                    onSubmit={this.createAdventure}>
                    <input
                        type="text"
                        onChange=""
                        defaultValue="Enter a name" />
                    <input
                        type="text"
                        onChange=""
                        defaultValue="Enter a pause time" />
                    <input
                        type="text"
                        onChange=""
                        defaultValue="Enter a decision" />
                    <input
                        type="button"
                        value="submit" />
                </form>
            </section>
        );
    }
}
