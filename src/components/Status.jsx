import React, { useEffect } from "react";
import axios from "axios";
import info from "../info";

export default function WashStatus(data) {
  useEffect(() => {
    axios
      .post(
        info.backendUrl + "/" + data.locationID + "/start/" + data.programID
      ) 
      .then((result) => {
        console.log(result.data);
      });
  }, []);

  return (
    <div className="confirm-page">
      <h2>Din vask er nu igang</h2>
    </div>
  );
}
