import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Create extends Component {
    constructor() {
        super();

        this.createAdventure = this.createAdventure.bind(this);
    }

    createAdventure() {
        const headers = new Header();
        const form = new FormData(ReactDOM.findDOMNode(this.refs.form));
        headers.append("Content-Type", "application/json");

        const opts = {
            method: 'POST',
            headers: headers,
            body: form,
            mode: 'cors',
            cache: 'default'
        };

        fetch('http://localhost:9001/videos/' + {this.props.params.id}, opts)
    }

    render() {
        return (
            <div>
                This is where the creation form is.
                <form className="adventure-form"
                    onSubmit={this.createAdventure} />
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
                        value="submit" >
                </form>
            </div>
        );
    }
}