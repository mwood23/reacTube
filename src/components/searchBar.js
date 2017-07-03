import React, {Component} from 'react'

// Every class must have a render function
// Every class must have a state
class SearchBar extends Component {
  constructor(props) {
      // Getting parent method's properties?
      super(props)


      this.state = { term: '' }
  }

  render() {
    return (
      <div className="search-bar">
        <input
        value= {this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

// Start off with a functional component and then refactor if you need it to be a class

export default SearchBar
