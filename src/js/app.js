import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Leaderboard from './components/leaderboard';
import '../css/style.css';

// parent Component
class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      data: [],
      last30DaysBtnDisabled: true,
      allTimeBtnDisabled: false
    };

    // function call to set initial state
    this.getLast30Days();
  }

  // ajax call function
  getLast30Days () {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then( (response) => {
        return response.json();
      })
      .then( (data) => {
        this.setState( {data} );
      })
      .catch( () => {
        this.setState({ data: [] });
      });
    this.setState({
      last30DaysBtnDisabled: true,
      allTimeBtnDisabled: false
    });
  }

  // ajax call function
  getAllTime () {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
      .then( (response) => {
        return response.json();
      }).then( (data) => {
        this.setState({ data });
      })
      .catch( () => {
        this.setState({ data: [] });
      });
    this.setState({
      allTimeBtnDisabled: true,
      last30DaysBtnDisabled: false
    });
  }

  render() {
    // render Leaderboard
    return (
      <div className="container">
        <h1>Free Code Camp Leaderboard</h1>
        <button type="button" className="btn btn-primary last30Days"
          disabled={this.state.last30DaysBtnDisabled}
          onClick={() => this.getLast30Days()}>Top 100 Last 30 Days</button>
        <button type="button" className="btn btn-primary allTime"
          disabled={this.state.allTimeBtnDisabled}
          onClick={() => this.getAllTime()}>Top 100 All Time</button>
        <Leaderboard data={this.state.data} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.app'));
