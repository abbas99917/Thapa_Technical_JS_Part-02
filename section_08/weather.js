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




// get the actual cioyntry name
const getCountryName = (code) => {
    return new Intl.DisplayNames(["en"], {
        type: "region"
    }).of(code);
};


// get date and time
const getDateTime = (dt) =>{
  
    const curDate = new Date(dt * 1000) // conver millisecond to second
    // console.log(curDate)
    const option = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"

    }
    const formatter = new Intl.DateTimeFormat("en-US", option)
    console.log(formatter)
    return formatter.format(curDate)
}


// search functionality

weatherSearch.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    
})

const getWeatherData = async () =>{
    let apiKey =  "e100bf967d97257b5491700c4e042fec"
    let city = "peshawar"
   const URL = `https://api.openweathermap.org/data/2.5/weather?lat=34.0151&lon=71.5249&units=metric&lang=en&appid=${apiKey}`;


    try {   
            const res = await  fetch(URL)
            const data = await res.json()
            console.log(data)
            
            const {name, main, weather,wind, sys,dt} = data;
            weatherCity.textContent = `${name}, ${getCountryName(sys.country)}`;
            weatherDateTime.innerHTML = getDateTime(dt)
            weatherForcost.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
            weatherTemperature.innerHTML = `${main.temp} &#176`;
            weatherMin.innerHTML = `Min:  ${main.temp_min.toFixed()} &#176`
            weatherMax.innerHTML = `Max: ${main.temp_max.toFixed()} &#176`
            weatherFeelsLike.innerHTML = `${main.feels_like} &#176`
            Humidity.innerHTML = `${main.humidity}%`
            winds.innerHTML = `${wind.speed} m/s`
            pressure.innerHTML = `${main.pressure} hPa`


    } catch (error) {
        console.log(error)
    }
}
document.body.addEventListener("loud", getWeatherData())