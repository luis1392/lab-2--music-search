import React, { Component } from "react";

import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";

export default class Home extends Component {
  state = {
    loading: true,
    error: null,
    artists: null
  };
  handleSearch = async artists => {
    try {
      let response = await fetch(
        `https://react-api-lab.herokuapp.com/search?query=${artists}`
      );
      const data = await response.json();
      await this.setState({
        loading: false,
        artists: data.data
      });
    } catch (error) {
      this.setState({
        error: `No hay resultados ${error}`
      });
    }
  };
  render() {
    const { artists, loading, error } = this.state;

    return (
      <React.Fragment>
        <SearchBar onSearch={this.handleSearch} />
        {!artists && "not Results"}
        {!loading &&
          artists && (
            <ul>
              {artists.map(artist => (
                <li key={artist.name}>
                  <Link to={`/artists/${artist.id}`}>
                    <div className="mb-4">
                      <div className="row mb-4">
                        <div className="col-4">
                          <img
                            className="img-fluid "
                            src={artist.imageUrl}
                            alt={artist.name}
                          />
                        </div>
                        <div className="col-8">
                          <h2>{artist.name}</h2>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        {error && <p>{error.message}</p>}
      </React.Fragment>
    );
  }
}
