import React from 'react';

// child component of leaderboard
const tableRecord = ({rank, username, imageURL, allTime, recent}) => {

  return (
    <tr>
      <td>{rank}</td>
      <td>{username}</td>
      <td><img src={imageURL}/></td>
      <td>{allTime}</td>
      <td>{recent}</td>
    </tr>
  );
};

export default tableRecord;
