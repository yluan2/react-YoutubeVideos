import React from "react";
import Searchbar from "./SearchBar";
import youtubeAPI from "../api/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [] };
  onTermSubmit = async (term) => {
    const response = await youtubeAPI.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <Searchbar onSubmitToAPI={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
