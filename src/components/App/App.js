import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "../Layout";
import Home from "../../pages/Home";
import Artist from "../../pages/Artist";
import Albums from "../../pages/Albums";
import NoMatch from "../../pages/NoMatch";
import PlayList from "../../pages/PlayList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/artists/:artistId" component={Artist} />
            <Route exact path="/albums/:albumId" component={Albums} />
            <Route exact path="/playlists/:userId" component={PlayList} />
            <Route component={NoMatch} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
