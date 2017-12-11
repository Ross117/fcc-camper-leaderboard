import React from 'react';
import TableRecord from './tableRecord';

 // child Component of App
const Leaderboard = (props) => {

  const tableRecords = props.data.map( (record, index) => {
    // create an array of TableRecord components from the JSON data
    return <TableRecord
      rank={index + 1}
      // give each record a unique key. Why can't I just use rank?
      key={index + 1}
      username={record.username}
      imageURL={record.img}
      recent={record.recent}
      allTime={record.alltime} />
  });

    // create the Leaderboard out of the array of TableRecord components
  return (
    <div className="leaderboard">
      <table className="table table-striped table-bordered table-hover table-sm">
        <thead className="thead-inverse">
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Image</th>
            <th>Points from Last 30 Days</th>
            <th>All Time Points</th>
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
