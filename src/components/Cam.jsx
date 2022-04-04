import React, { useEffect, useState } from "react";
import axios from "axios";
import info from "../info";

export default function Cam(data) {
  const [backendLpn, setBackendLpn] = useState({});

  useEffect(() => {
    axios.get(info.backendUrl + "/cam/" + data.LocationID).then((result) => {
      setBackendLpn(result.data);
      console.log(result.data.lpn);
    });
  }, []);

  function getRandomLPN(lpn) {
    const chars = lpn.slice(0, 2);
    const numbers = lpn.slice(2) - Math.round(Math.random() * 1);
    return chars + numbers;
  }

  const lpn = getRandomLPN("BV99123");

  function confirmLpn() {
    data.setLPN(lpn);
  }
  return (
    <div className="lcp-page justify-content-center">
        <h1>{lpn}</h1>
        <button className="btn btn-dark" onClick={confirmLpn}>Confirm</button>
    </div>
  );
}
