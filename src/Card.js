import { useEffect, useState } from "react";

const cityName = "Toronto";
const apiKey = "643d59b424b19869f3a44f4d34f10322";
const date = new Date();
const units = "metric";
const url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${units}`;
const daysOfTheWeek = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

function Card(props) {
  const dayDifference = props.day * 8;
  const [icon, setIcon] = useState();
  const [high, setHigh] = useState();
  const [low, setLow] = useState();
  useEffect(() => {
    fetch(url)
      .then((response) => (response = response.json()))
      .then((data) => {
        setIcon(data.list[dayDifference].weather[0].icon);
        setHigh(data.list[dayDifference].main.temp_max);
        setLow(data.list[dayDifference].main.temp_min);
      })
      .catch((error) => console.log("error " + error));
  }, [dayDifference]);

  function formatClass() {
    let value = "card";
    if (props.day === 0) value += " current-day";
    return value;
  }

  return (
    <div className={formatClass()}>
      <h3>{daysOfTheWeek[date.getDay() + props.day]}</h3>
      {icon && high && low && (
        <>
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt='weather icon'
          />
          <div className='temp'>
            <p>{parseInt(high)}&deg;</p>
            <p>{parseInt(low)}&deg;</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
