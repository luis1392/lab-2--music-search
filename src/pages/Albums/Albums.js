import React, { Component } from "react";

import Tracks from "../../components/Tracks";

class Albums extends Component {
  state = {
    loading: true,
    error: null,
    album: null
  };

  componentDidMount() {
    this.loadAlbums();
  }

  renderTracks(tracks) {
    const track = tracks.map(element => {
      return <Tracks key={element.trackNumber} track={element} />;
    });

    return track;
  }

  loadAlbums = () => {
    fetch(
      ` https://react-api-lab.herokuapp.com/albums/${
        this.props.match.params.albumId
      }`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          album: data.data
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
    const { loading, album, error } = this.state;
    return (
      <React.Fragment>
        {loading && <p>Loading Album...</p>}

        {!loading &&
          album && (
            <div className="row">
              <div className="col-12">
                <div className="row mb-5">
                  <div className="col-3">
                    <img
                      className="img-fluid"
                      src={album.imageUrl}
                      alt="disco face"
                    />
                  </div>
                  <div className="col-9">
                    <h2>{album.name}</h2>
                  </div>
                </div>
                <h2>TRACKS:</h2>
                <ol className="list-unstyled">
                  {this.renderTracks(album.tracks)}
                </ol>
              </div>
            </div>
          )}
        {error && <p>{error.message}</p>}
      </React.Fragment>
    );
  }
}

export default Albums;
