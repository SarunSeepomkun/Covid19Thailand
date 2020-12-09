import axios from "axios";

export const fetchToday = async () => {
  try {
  const data = await axios
      .get("https://covid19.th-stat.com/api/open/today")
      .then((response) => {
        // console.log('Success : line 8 api/Covid19TH.fetchToday.get().then()');
        // console.log(response);
        return response;
      })
      .catch((error) => {
        console.log('Error : line 11 api/Covid19TH.fetchToday.get().catch()');
        console.log(error);
        return error;
      });
      return data;
  } catch (error) {
    console.log(`Error : line 14 api/Covid19TH.fetchToday.js ${error}`);
  }
};

export const fetchSummary = async () => {
    try {
    const data = await axios
        .get("https://covid19.th-stat.com/api/open/cases/sum")
        .then((response) => {
          // console.log('Success : line 8 api/Covid19TH.fetchSummary.get().then()');
          // console.log(response);
          return response;
        })
        .catch((error) => {
          console.log('Error : line 11 api/Covid19TH.fetchSummary.get().catch()');
          console.log(error);
          return error;
        });
        return data;
    } catch (error) {
      console.log(`Error : line 14 api/Covid19TH.fetchSummary.js ${error}`);
    }
  };

export default fetchToday;