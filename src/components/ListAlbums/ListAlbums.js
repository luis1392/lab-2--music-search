import React, { Component } from "react";

import { Link } from "react-router-dom";

class ListAlbums extends Component {
  render() {
    const { album } = this.props;
    return (
      <Link to={`/albums/${album.id}`}>
        <div className="row mb-4">
          <div className="col-3">
            <img className="img-fluid" src={album.imageUrl} alt={album.name} />
          </div>
          <div className="col-9">
            <h2>{album.name}</h2>
          </div>
        </div>
      </Link>
    );
  }
}

export default ListAlbums;
