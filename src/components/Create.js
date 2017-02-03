import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Create extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            decision: '',
            choices: '',
        };
        this.createAdventure = this.createAdventure.bind(this);
        this.playtest = this.playtest.bind(this);
    }

    createAdventure() {
        const form = new FormData(ReactDOM.findDOMNode(this.refs.form));

        const opts = {
            method: 'POST',
            headers: ("Content-Type", "application/json"),
            body: form,
            mode: 'cors',
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
