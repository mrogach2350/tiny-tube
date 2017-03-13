import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import '../style/App.css';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyCVYEm0cS115IltN15h31ueQ74CJhYHdOI';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo : null
    };

    this.videoSearch('react');
  }

  videoSearch(term) {
    YTSearch({key : API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar
          onSearchTermChange={videoSearch} />
      </div>
    );
  }
}

export default App;
