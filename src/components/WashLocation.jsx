import React from "react";
export default function WashLocation(data) {
  return (
      <button
        className="btn btn-wash btn-location index-buttons"
        onClick={data.locationClicked}
        disabled={data.location.status !== "available" ? "on" : ""}  /* maintenance - non clickable */
        value={data.location.id}
      >
        {data.location.name}
      </button>
  );
}
