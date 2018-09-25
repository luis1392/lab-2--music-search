import React, { Component } from "react";

import ListAlbums from "../../components/ListAlbums";

class Artist extends Component {
  state = {
    loading: true,
    error: null,
    artist: null
  };

  componentDidMount() {
    this.loadArtist();
  }

  renderAlbum(albums) {
    const album = albums.map(element => {
      return <ListAlbums key={element.id} album={element} />;
    });

    return album;
  }

  loadArtist = () => {
    fetch(
      `https://react-api-lab.herokuapp.com/artists/${
        this.props.match.params.artistId
      }`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          artist: data.data
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error
        });
      });
  };
  render() {
    const { loading, artist, error } = this.state;
    return (
      <React.Fragment>
        {loading && <p>Loading Artist...</p>}

        {!loading &&
          artist && (
            <div className="row">
              <div className="col-12">
                <div className="row undefined">
                  <div className="col-4">
                    <img
                      className="img-fluid"
                      src={artist.imageUrl}
                      alt={artist.name}
                    />
                  </div>
                  <div className="col-8">
                    <h1>{artist.name}</h1>
                    <p>{artist.bio}</p>
                  </div>
                </div>
                <h2>ALBUMS:</h2>
                <React.Fragment>
                  {this.renderAlbum(artist.albums)}
                </React.Fragment>
              </div>
            </div>
          )}
        {error && <p>{error.message}</p>}
      </React.Fragment>
    );
  }
}
export default Artist;
