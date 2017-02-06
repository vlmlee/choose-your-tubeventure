import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';
import CreateInput from './components/presentational/CreateInput.js';
import SearchInput from './components/presentational/SearchInput.js';
import Header from './components/presentational/Header.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            youtubeId: '',
            searchTerm: '',
            results: '',
            error: '',
        };

        this.handleLinkChange = this.handleLinkChange.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearchAdventure = this.handleSearchAdventure.bind(this);
    }

    handleLinkChange(e) {
        this.setState({ youtubeId: e.target.value });
    }

    handleSearchChange(e) {
        this.setState({ searchTerm: e.target.value });
    }

    handleSearchAdventure(e) {
        if (e.key === 'Enter') {
            fetch(`http://localhost:9001/search/${this.state.searchTerm}`)
                .then(response => {
                    return response.json();
                })
                .then(responseJSON => {
                    this.setState({
                        searchTerm: '',
                        results: responseJSON.content,
                        error: '',
                    });
                })
                .catch(err => {
                    this.setState({ error: err.message });
                });
        }
    }

    parseURL(url){
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&\?]*).*/;
        var match = url.match(regExp);
        return (match&&match[7].length === 11) ? match[7] : false;
    }

    render() {
        const link = this.parseURL(this.state.youtubeId) || '';
        return (
            <section className="App">
                <Header
                    text="CHOOSE YOUR TUBEVENTURE"/>

                <CreateInput
                    handleLinkChange={this.handleLinkChange}
                    youtubeId={this.state.youtubeId} />

                <Link className="create-link" to={"/create/" + link}>CREATE</Link>

                <SearchInput
                    handleSearchChange={this.handleSearchChange}
                    handleSearchAdventure={this.handleSearchAdventure}
                    value={this.state.searchTerm} />

                { this.state.results ? (
                    <section className="search-results">
                        <h1 className="search-input-h1 search-results-heading">Search Results</h1>
                        { this.state.results.map(i => (
                            <Link key={i._id}
                                className="search-link"
                                to={"/view/" + i._id}>
                                {i.name}: {i.description}
                            </Link>
                        )) }
                    </section>
                ) : '' }
            </section>
        );
    }
}

export default App;
