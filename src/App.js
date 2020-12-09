import React, { useState, useEffect } from "react";
import "./App.css";
import { fetchToday , fetchSummary } from "./api/Covid19TH";
import Covid19Today from './component/Covid19Today';
import Covid19Summary from './component/Covid19Summary';

function App() {
  // let isLoading = true;
  const [covidTHToday, setcovidTHToday] = useState([]);
  const [covidTHSum, setcovidTHSum] = useState([]);

  const GetCovidToday = async () => {
    console.log("line 8 App.GetCovidToday");
    const { data } = await fetchToday();
    setcovidTHToday(data);
    console.log(data);
    // isLoading = false;
  };

  const GetCovidSummary = async () => {
    console.log("line 8 App.setcovidTHSum");
    const { data } = await fetchSummary();
    setcovidTHSum(data);
    console.log(data);
    // isLoading = false;
  };

  useEffect(() => {
    GetCovidToday();
  }, []);

  useEffect(() => {
    GetCovidSummary();
  }, []);

  return <div className="App">
    <h1>Covid-19 Thailand</h1>
    <Covid19Today props={covidTHToday} />
    <Covid19Summary props={covidTHSum} />
    </div>;
}

export default App;
