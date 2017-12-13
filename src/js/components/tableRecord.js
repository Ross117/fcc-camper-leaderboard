import React from 'react';

// child component of leaderboard
const TableRecord = ({rank, username, imageURL, recent, allTime}) => {

  return (
    <tr>
      <td>{rank}</td>
      <td>{username}</td>
      <td><img src={imageURL}/></td>
      <td>{recent}</td>
      <td>{allTime}</td>
    </tr>
  );
};

export default TableRecord;
