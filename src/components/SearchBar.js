import React from 'react';

class SearhBar extends React.Component {

    // can be replaced with an arrow function
    // onInputChange(event) {
    //     console.log(event.target.value)
    // }

    state = { term: '' };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label><b>Image Search</b></label>
                        {/* <input type="text" className="field" onChange={this.onInputChange} /> */}
                        {/* using arrow function instead of creating a new function */}
                        {/* <input type="text" className="field" onChange={(event) => console.log(event.target.value)} /> */}
                        {/* Converting uncontrolled input to controlled */}
                        <input 
                        type="text"
                        value={this.state.term}
                        placeholder="Type your search term"
                        onChange={e => this.setState({term: e.target.value})} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearhBar;
