import React, { useState, useEffect } from "react";
import { fetchToday, fetchSummary, fetchTimeline } from "./api/Covid19TH";
import Covid19Today from "./component/Covid19Today/Covid19Today.js";
import Covid19Summary from "./component/Covid19Summary/Covid19Summary";
import Covid19Timeline from "./component/Covid19Timeline/Covid19Timeline";
import "./App.css";
import "./component/Utility.css";

function App() {
  // let isLoading = true;
  const [covidTHToday, setcovidTHToday] = useState([]);
  const [covidTHSum, setcovidTHSum] = useState([]);
  const [covidTHTimeline, setcovidTHTimeline] = useState([]);

  useEffect(() => {
    const GetCovidToday = async () => {
      // console.log("line 16 App.GetCovidToday");
      const { data } = await fetchToday();
      setcovidTHToday(data);
      //console.log(data);
      // isLoading = false;
    };
    GetCovidToday();
  }, []);

  useEffect(() => {
    const GetCovidSummary = async () => {
      //  console.log("line 27 App.GetCovidSummary");
      const { data } = await fetchSummary();
      // console.log(data);
      setcovidTHSum(data);
      
      // isLoading = false;
    };
    GetCovidSummary();
  }, []);

  useEffect(() => {
    const GetCovidTimeline = async () => {
      console.log("line 38 App.GetCovidTimeline");
      const { data } = await fetchTimeline();
      setcovidTHTimeline(data);
      console.log(data);
      // isLoading = false;
    };
    GetCovidTimeline();
  }, []);

  return (
    <div className="container">
      <span className="text-center" width="100%"><h1>Covid-19 Thailand</h1></span>
      <Covid19Today props={covidTHToday} />
      <Covid19Summary props={covidTHSum} />
      <Covid19Timeline props={covidTHTimeline} />
    </div>
  );
}

export default App;
