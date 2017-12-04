import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Leaderboard from './components/leaderboard';

// parent Component
class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      data: []
    };

    // function call to set initial state
    this.getLast30Days();
  }

  getLast30Days () {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then( (response) => {
        return response.json();
      }).then( (data) => {
        this.setState({data});
      });
  }

  getAllTime () {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
      .then( (response) => {
        return response.json();
      }).then( (data) => {
        this.setState({data});
      });
  }

  render() {
    // render Leaderboard table
    // pass the two ajax call functions as event handlers
    return (
      <div>
        <h1>Free Code Camp Leaderboard</h1>
        <Leaderboard data={this.state.data} top100AllTime={this.getAllTime.bind(this)} top100Last30Days={this.getLast30Days.bind(this)} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.app'));
