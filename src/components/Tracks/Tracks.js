import React, { Component } from "react";

class Tracks extends Component {
  render() {
    const { track } = this.props;
    return (
      <li>
        <div className="row mb-4">
          <div className="col-2">
            <h4>{track.trackNumber}</h4>
          </div>
          <div className="col-10">
            <h3>{track.name}</h3>
            <p>
              <em>{track.durationInSeconds}</em>
            </p>
          </div>
        </div>
      </li>
    );
  }
}

export default Tracks;
