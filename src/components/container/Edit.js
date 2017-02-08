import React, { Component } from 'react';
import AdventureInfo from '../presentational/AdventureInfo.js';
import EditQuestion from '../presentational/EditQuestion.js';
import Header from '../presentational/Header.js';

export default class Edit extends Component {
    constructor() {
        super();
        this.state = {
            secret: '',
            allowed: false,
            error: ''
        };

        this.handleMagicWord = this.handleMagicWord.bind(this);
        this.tryMagicWord = this.tryMagicWord.bind(this);
    }


    render() {
        return (
            <section>
                <Header text="EDIT STORYBOARD" />
                    <section className="edit-section" >
                        { this.state.allowed ? (
                            <AdventureInfo
                                name={this.state.name}
                                author={this.state.author} /> )
                        : ( <EditQuestion handleMagicWord={this.handleMagicWord}
                                tryMagicWord={this.tryMagicWord} /> ) }
                    </section>
            </section>
        );
    }
}
