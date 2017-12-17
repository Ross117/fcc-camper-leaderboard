import React from 'react';

// child component of leaderboard
const TableRecord = (props) => {

  return (
    <tr>
      <td>{props.rank}</td>
      <td>{props.username}</td>
      <td><img src={props.imageURL}/></td>
      <td>{props.recent}</td>
      <td>{props.allTime}</td>
    </tr>
  );
};

export default TableRecord;
