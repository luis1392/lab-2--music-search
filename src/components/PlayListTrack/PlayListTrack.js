import React, { Component } from "react";

class PlayListTrack extends Component {
  render() {
    const { playListTrack } = this.props;
    return (
      <React.Fragment>
        <li className="mb-4">
          <h4 className="mb-0">{playListTrack.track.name}</h4>
          <p>{`from ${playListTrack.track.album.name} by ${
            playListTrack.track.artist.name
          }`}</p>
        </li>
      </React.Fragment>
    );
  }
}

export default PlayListTrack;
