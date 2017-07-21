import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
const API_KEY = 'AIzaSyCo9LMMVVYvuP3DkUyt_JVQIzfMAF35GIc';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('higer order functions')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    });
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>Youtube Mini <span className="code">with React</span></h1>
        </div>
        <SearchBar onSearchTermChange={this.videoSearch.bind(this)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    )
  }
}

export default App;
