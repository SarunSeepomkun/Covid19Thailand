import React, { useState, useEffect } from "react";
import { fetchToday, fetchTimeline } from "./api/Covid19TH";
import Covid19Today from "./component/Covid19Today/Covid19Today.js";
// import Covid19Summary from "./component/Covid19Summary/Covid19Summary";
import Covid19Timeline from "./component/Covid19Timeline/Covid19Timeline";
import "./App.css";
import "./component/Utility.css";

function App() {
  const [covidTHToday, setcovidTHToday] = useState([]);
  // const [covidTHSum, setcovidTHSum] = useState([]);
  const [covidTHTimeline, setcovidTHTimeline] = useState([]);

  useEffect(() => {
    const GetCovidToday = async () => {
      const { data } = await fetchToday();
      setcovidTHToday(data);
    };
    GetCovidToday();
  }, []);

  // useEffect(() => {
  //   const GetCovidSummary = async () => {
  //     const { data } = await fetchSummary();
  //     setcovidTHSum(data);
  //   };
  //   GetCovidSummary();
  // }, []);

  useEffect(() => {
    const GetCovidTimeline = async () => {
      console.log("line 38 App.GetCovidTimeline");
      const { data } = await fetchTimeline();
      setcovidTHTimeline(data);
      console.log(data);
    };
    GetCovidTimeline();
  }, []);

  return (
    <>
      <div className="container">
        <span className="text-center">
          <h1>Covid-19 Thailand</h1>
        </span>
        <Covid19Today props={covidTHToday} />
        {/* <Covid19Summary props={covidTHSum} /> */}
        <Covid19Timeline props={covidTHTimeline} />
      </div>
      <footer className="footer py-1">
        <div className="container">
          <p className="text-center">
            Provide data by :
            <a
              href="https://covid19.ddc.moph.go.th/"
              target="_blank"
              rel="noopener noreferrer"
            >
              กรมควบคุมโรค
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
