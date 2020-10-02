import React from 'react';
import './searchBar.css';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <input 
                        id="search-input"
                        type="text"
                        value={this.state.term}
                        placeholder="Type an image to search"
                        onChange={e => this.setState({term: e.target.value})} 
                        />

                    <button className="ui button green" id="search-button" onClick={this.onFormSubmit}>Search</button>
                </form>
        );
    }
}

export default SearchBar;
