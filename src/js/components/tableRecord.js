import React from 'react';

// child component of leaderboard
const tableRecord ({username, image, allTime, recent}) => {

  return (
    <tr>
      <td>{username}</td>
      <td><img src={image}/></td>
      <td>{allTime}</td>
      <td>{recent}</td>
    </tr>
  );
};

export default tableRecord;
