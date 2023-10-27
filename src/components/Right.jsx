import { useEffect, useRef, useState } from 'react'
import Search from './Search';
import Tablee from './Tablee';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Details from './Details';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Colors } from "chart.js/auto";

function Right() {
  
  const [holder, setholder] = useState({
    data: ["hhgj"],
    city_name: "",
    country_code: "",
    time_zone: "",
    lat: "",
    max_temp: "",
    min_temp: "",
    ts: ""
  });

  const [Data, setData] = useState({
    data: ["hhgj"],
    city_name: "",
    country_code: "",
    time_zone: "",
    lat: "",
    max_temp: "",
    min_temp: "",
    ts: ""
  });
  
  ChartJS.register(ArcElement);
  ChartJS.defaults.color = "#fff"
  const input = useRef("Miami,FL");
  let filter = useRef(0)
  let datefilter = useRef("")


  let [Piedata, setPiedata] = useState({
    labels: [],
    datasets: [{
      label: "Temperature",
      data: [],
      backgroundColor: ["yellow", "green", "blue", "red", "brown"],
      borderColor: "white",
      borderWidth: 1
    },
    ],
  });

  async function getWeather(location, end_date) {
    const response = await fetch(`https://api.weatherbit.io/v2.0/history/daily?postal_code=27601&&city=${input.current}&country=US&start_date=${end_date ? end_date : "2023-10-16"}&end_date=${end_date ? "2023-10-17" : "2023-10-21"}&key=c50c43fd06e645b99082bf3b068a094b`);
    const weather = await response.json();
    setholder({
      data: weather.data,
      city_name: weather.city_name,
      country_code: weather.country_code,
      timezone: weather.timezone,
      lat: weather.lat,
      max_temp: weather.data.max_temp,
      min_temp: weather.data.min_temp,
      ts: weather.data.ts
    })

    setPiedata({
      labels: weather.data.map((obj) => {
        return obj.datetime
      }),
      datasets: [{
        label: "Temperature",
        data: weather.data.map((obj) => {
          return obj.temp
        }),
        backgroundColor: ["yellow", "green", "blue", "red", "brown"],
        borderColor: "white",
        borderWidth: 1
      },
      ],
    })
  }

  useEffect(() => {
    setTimeout(() => {
      setData(holder)
    }, 1000);
    console.log(Data.data)
  });







  return (
    <Router>
      <div className='Right'>
        <div className='first grid-item' >
          {Data.city_name ? (
            <h1 className="date">
              {Data.city_name} <br></br>
              <br/>
              <span>{Data.city_name}, {Data.country_code}</span>

            </h1>
          ) : (
            <p></p>
          )}
        </div>
        <div className='second grid-item timezone'>
          {Data.timezone ? (
            <h1>
              TimeZone<br></br>
              <br />
              <span>{Data.timezone}</span>
            </h1>
          ) : (
            <p></p>
          )}</div>
        <div className='third grid-item'>
          {Data.lat ? (
            <h1>
              Latitude<br></br>
              <br />
              <span>{Data.lat}</span>

            </h1>
          ) : (
            <p></p>
          )}</div>
        <div className='fifth grid-item'>
          <div><Bar data={Piedata}></Bar></div>
        </div>
        <div className='fourth grid-item'>
          <Search getWeather={getWeather} input={input} filter={filter} datefilter={datefilter}></Search>
          <Switch>
            <Route exact path="/">
              <Tablee Data={Data.data} filter={filter}></Tablee>
            </Route>
            <Route path="/Details/:id">
              <Details Data={Data}></Details>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  )
}

export default Right