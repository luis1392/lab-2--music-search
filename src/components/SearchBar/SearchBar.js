import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    error: null,
    loading: true
  };
  searchArtist = React.createRef();

  handlerSearchSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.searchArtist.current.value);
    event.target.reset();
  };
  render() {
    return (
      <div className="col-12">
        <div>
          <form className="SearchBar mb-4" onSubmit={this.handlerSearchSubmit}>
            <div className="row">
              <div className="col-10">
                <input
                  className="SearchBar__input"
                  type="text"
                  placeholder="Artist name"
                  ref={this.searchArtist}
                />
              </div>
              <div className="col-2">
                <button className="SearchBar__submit-button">Search</button>
              </div>
            </div>
          </form>
          <ul className="list-unstyled" />
        </div>
      </div>
    );
  }
}
export default SearchBar;
