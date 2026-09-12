const weatherCity = document.querySelector(".weather-city")
const weatherDateTime = document.querySelector(".weather-date-time")
const weatherSearch = document.querySelector(".weather-search")
const weatherForcost = document.querySelector(".weather_forcast")
const weatherTemperature = document.querySelector(".weather_temperature")
const weatherIcon = document.querySelector(".weather_icon")
const weatherMin = document.querySelector(".weather_min")
const weatherMax = document.querySelector(".weather_max");

const weatherFeelsLike = document.querySelector(".weather_feelslike")
const Humidity = document.querySelector(".Humidity")
const winds = document.querySelector(".wind")
const pressure = document.querySelector(".pressure")




// to get full countryName 

const getCountryName = (code) =>{
    return new Intl.DisplayNames([code], { type: "region" }).of(code);

}
// timing formating
const getDateTime = (dt)=>{

    const curDate = new Date(dt * 1000)
    console.log(curDate)
    
    const option = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    
    }
    const formatter = new Intl.DateTimeFormat("en-US", option)
   return formatter.format(curDate)
    
}



// icon code 
const iconMap = {
    "01d": "fa-sun",
    "01n": "fa-moon",
    "02d": "fa-cloud-sun",
    "02n": "fa-cloud-moon",
    "03d": "fa-cloud",
    "03n": "fa-cloud",
    "04d": "fa-cloud",
    "04n": "fa-cloud",
    "09d": "fa-cloud-showers-heavy",
    "09n": "fa-cloud-showers-heavy",
    "10d": "fa-cloud-sun-rain",
    "10n": "fa-cloud-moon-rain",
    "11d": "fa-cloud-bolt",
    "11n": "fa-cloud-bolt",
    "13d": "fa-snowflake",
    "13n": "fa-snowflake",
    "50d": "fa-smog",
    "50n": "fa-smog"
};

let city = "Peshawar";

weatherSearch.addEventListener("submit",(e)=>{
    e.preventDefault()
const searchCity = document.querySelector(".search-city")

city = searchCity.value;
getWeatherData()
searchCity.value = ""

})

        
    const getWeatherData = async () => {
    const API_KEY = "9ca2c618d2fad5ac502bca3fd5cb658d";
    const weatherUrl =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;




    try {
        const res = await fetch(weatherUrl);
        const data = await res.json();
        console.log(data);

        const {main,name, weather, wind, sys,dt} = data;

        weatherCity.innerHTML =`${name} ${getCountryName(sys.country)}`;

        weatherDateTime.innerHTML = getDateTime(dt)

        // weatherIcon.innerHTML = `${weather[0].icon}`
        weatherForcost.innerHTML = weather[0].main;

        weatherTemperature.innerHTML = main.temp;

        weatherMin.innerHTML = `Min: ${main.temp_min.toFixed()}&#176`
        
        weatherMax.innerHTML = `Max: ${main.temp_max.toFixed()}&#176`

        weatherFeelsLike.innerHTML = `${main.feels_like.toFixed(2)}&#176`;
        Humidity.innerHTML = `${main.humidity}%`
        winds.innerHTML = `${wind.speed} m/s`
        pressure.innerHTML = `${main.pressure}hPa`







    } catch (error) {
        console.log(error);
    }
};

window.addEventListener("load", getWeatherData);




document.body.addEventListener("loud", getWeatherData())