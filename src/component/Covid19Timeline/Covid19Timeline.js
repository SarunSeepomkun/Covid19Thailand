import React from "react";
import { Line } from "react-chartjs-2";

function Covid19Timeline({ props }) {
  //console.log("Line 5 component/Covid19Timeline/Covid19Timeline");
  //console.log(props);
  var labels = [];
  var dataSet = [];

  if (typeof(props) !== 'undefined'  && props.length !== 0) {
    labels = props.Data.map(function (e) {
      return new Date(e.Date).toDateString();
    });
    dataSet = props.Data.map(function (e) {
      return e.Confirmed;
    });
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Covid-19 Thailand",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataSet,
      },
    ],
  };
  return (
    <div className="container">
      <Line data={data} />
    </div>
  );
}

export default Covid19Timeline;
