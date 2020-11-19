import React from "react";

function SongRow({ track = "test" }) {
  return (
    <div className="songRow">
      <img alt=""></img>
      <div className="songRow_info">
        <h1>{track.name}</h1>
      </div>
    </div>
  );
}

export default SongRow;
