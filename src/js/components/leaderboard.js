import React from 'react';
import TableRecord from './tableRecord';

 // this Component should have state because it will receive user input?
 // Should the state be the which option (of the two) has been selected?

 // child Component of App
const Leaderboard = (props) => {

  const tableRecords = props.data.map( (record, index) => {
      return <TableRecord
        rank={index + 1}
        username={record.username}
        imageURL={record.img}
        allTime={record.alltime}
        recent={record.recent} />
    });

    return (
      <div className="leaderboard">
        <button type="button" className="btn" onClick={() => props.top100AllTime()}>All Time</button>
        <button type="button" className="btn" onClick={() => props.top100Last30Days()}>Recent</button>
        <table className="table">
          <thead>
            <tr>
              <th>Rank</th>
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

export default Leaderboard;
