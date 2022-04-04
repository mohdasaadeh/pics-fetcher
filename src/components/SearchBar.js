import React from "react";

class SearchBar extends React.Component {
  state = { search: "" };

  onSubmit(event) {
    event.preventDefault();

    this.props.onFormSubmit(this.state.search);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={(event) => this.onSubmit(event)}>
          <div className="field">
            <label>Search</label>
            <input
              type="text"
              name="search"
              placeholder="Search"
              value={this.state.search}
              onChange={(event) =>
                this.setState({ search: event.target.value })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
