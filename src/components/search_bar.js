import React, { Component } from 'react';

// Basic input using functional component

// const SearchBar = () => {
//     return <input />;
// }

// Basic input with event handling :

// Input with onChange input handling using class component

// class SearchBar extends Component {
//     render() {
//         return <input onChange={this.onInputChange} />
//     }
//
//     onInputChange(event) {
//         console.log(event.target.value);
//     }
// }

// Event handling with arrow function

// class SearchBar extends Component {
//     render() {
//         return <input onChange={event => console.log(event.target.value)} />
//     }
// }

// Using state to save the updated value inside value attribute of input

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = { term : '' };
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value = {this.state.term}
                    onChange={event => this.onSearchInput(event.target.value)}
                    />
            </div>
        );
    }

    onSearchInput(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
