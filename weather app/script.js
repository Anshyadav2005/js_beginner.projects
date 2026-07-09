const input = document.querySelector("input");
const button = document.querySelector("button");
const weatherspan = document.querySelector(".weather");
const humidityspan = document.querySelector(".humidity");
const windspeedspan = document.querySelector(".wind-speed");
const image = document.querySelector(".screen-img");

button.addEventListener("click", (event) => {
  event.preventDefault();
  let city = input.value;

  weather(city);
});

function imagechange(weather) {
  if (weather == "Rain") {
    image.src = "rain.png";
  } else if (weather == "Clouds") {
    image.src = "cloud.png";
  } else if (weather == "Clear") {
    image.src = "clear.png";
  } else if (weather == "Mist") {
    image.src = "mist.png";
  } else {
    image.src = "snow.png";
  }
}

const APIkey = "1ee789408f299b375e9b7699f796db21";
async function weather(city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;
  let weatherData = await fetch(url).then((result) => result.json());

  if (weatherData.cod == 404) {
    image.src = "404.png";
    weatherspan.innerText = `Location is Incorrect or Not found`;
    humidityspan.innerText = `Humidity: 0 %`;
    windspeedspan.innerText = `Wind Speed:0 m/s`;

    return;
  }

  let weather = weatherData.weather[0].main;
  let humidity = weatherData.main.humidity;
  let windspeed = weatherData.wind.speed;

  weatherspan.innerText = `Weather : ${weather}`;
  humidityspan.innerText = `Humidity:  ${humidity} %`;
  windspeedspan.innerText = `Wind Speed: ${windspeed} m/s`;

  imagechange(weather);
}
