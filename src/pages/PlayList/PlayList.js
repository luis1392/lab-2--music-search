import React, { Component } from "react";

import PlayListTrack from "../../components/PlayListTrack";

class PlayList extends Component {
  state = {
    loading: true,
    error: null,
    playList: null
  };
  componentDidMount() {
    this.loadPlayList();
  }

  renderElementPlayList(playList) {
    const playListTrack = playList.map(element => {
      return <PlayListTrack key={element.id} playListTrack={element} />;
    });

    return playListTrack;
  }

  loadPlayList = () => {
    fetch(
      ` https://react-api-lab.herokuapp.com/playlists/${
        this.props.match.params.userId
      }`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          playList: data.data
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
    const { playList, loading, error } = this.state;
    console.log(playList);

    return (
      <React.Fragment>
        {!playList && "Sin resultados"}
        {!loading &&
          playList && (
            <div className="col-12">
              <div>
                <h1>My Playlist</h1>
                <ul>{this.renderElementPlayList(playList)}</ul>
              </div>
            </div>
          )}
        {error && <p>{error.message}</p>}
      </React.Fragment>
    );
  }
}

export default PlayList;
