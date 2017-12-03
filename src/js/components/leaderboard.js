import React from 'react';
import TableRecord from './components/tableRecord';

 // this Component should have state because it will receive user input?
 // Should the state be the which option (of the two) has been selected?
 // need event handlers from parent component to enable user selection
 // child Component of App
class Leaderboard extends Component {
  constructor (props) {
    super (props);

    // should be null when page first loads as user has not yet made a selection - is this needed???
    this.state = {
      userSelection: ""
    };
  }

  const tableRecords = props.data.map( (record, index) => {
    return <tableRecord
      username={record[index].username}
      image={record[index].img}
      allTime={record[index].alltime}
      recent={record[index].recent} />
  });

  render() {
    return (
      <div className="leaderboard">
        <button type="button" className="btn" onClick={() => props.top100AllTime}>All Time</button>
        <button type="button" className="btn" onClick={() => props.top100Last30Days}>Recent</button>
        <table className="table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Image</th>
              <th>All Time Points</th>
              <th>Points from Last 30 Days</th>
            </tr>
          </thead>
          <tbody>
            {tableRecords}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Leaderboard;
