import React from "react";

function Covid19Today({ props }) {
  return (
    <div>
      Confirmed: {props.Confirmed}
      Deaths: {props.Deaths}
      Hospitalized: {props.Hospitalized}
      NewConfirmed: {props.NewConfirmed}
      NewDeaths: {props.NewDeaths}
      NewHospitalized: {props.NewHospitalized}
      NewRecovered: {props.NewRecovered}
      Recovered: {props.Recovered}
    </div>
  );
}

export default Covid19Today;
