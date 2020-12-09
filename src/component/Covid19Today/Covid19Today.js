import React from "react";
import "./Covid19Today.css";
import "../Utility.css";

function Covid19Today({ props }) {
  return (
    <div className="container grid grid-4">
      <div className="card border-red">
        <p>ติดเชื้อสะสม</p>
        <p>{props.Confirmed}</p>
      </div>

      <div className="card border-black">
        <p>เสียชีวิตสะสม</p>
        <p>{props.Deaths}</p>
      </div>

      <div className="card border-green">
        <p>อยู่ระหว่างรักษาใน รพ.</p>
        <p>{props.Hospitalized}</p>
      </div>

      <div className="card border-yellow">
        <p>ผู้ติดเชื้อใหม่</p>
        <p>{props.NewConfirmed}</p>
      </div>

      {/* <div className="card">
        <p>เสียชีวิตเพิ่มวันนี้</p>
        <p>{props.NewDeaths}</p>
      </div> */}

      {/* <div className="card">
        <p>รักษาเพิ่มใน รพ. วันนี้</p>
        <p>{props.NewHospitalized}</p>
      </div> */}

      {/* <div className="card">
        <p>รักษาหายวันนี้</p>
        <p>{props.NewRecovered}</p>
      </div> */}

      {/* <div className="card">
        <p>รักษาหายสะสม</p>
        <p>{props.Recovered}</p>
      </div> */}

    </div>
  );
}

export default Covid19Today;
