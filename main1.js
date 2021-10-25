//create a field to intake location data
function buttonClicked(){
    //submit the user input and call required data
}

//Weather info API
const form = document.getElementById('weatherLocationForm')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);
    let cityName = e.target.cityName.value
})

const getWeather = async function(weather){
    let response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${cityname},${statecode}&appid={APIKEY}`)
    let data = await response.json()
    return data
}

const weatherForm = document.getElementById('weatherForm');

weatherForm.addEventListener('submit', async (e) =>{
    e.preventDefault();
    let highTemp = e.target.weatherForm
    console.log(highTemp);
    let highTemp = await getWeather(highTemp)
    let labelHigh = document.createElement('h3');
    labelHigh.innerHTML = `${highTemperature.city}`

    let lowTemp = e.target.weatherForm
    console.log(lowTemp);
    let lowTemp = await getWeather(lowTemp)
    let labelLow = document.createElement('h3');
    labelLow.innerHTML = `${lowTemperature.city}`

    let humidity = e.target.weatherForm
    console.log(humidity);
    let humidity = await getWeather(humidity)
    let labelHum = document.createElement('h3');
    labelHum.innerHTML = `${humidity.city}`

    let forecast = e.target.weatherForm
    console.log(forecast);
    let forecast = await getWeather(forecast)
    let labelFore = document.createElement('h3');
    labelFore.innerHTML = `${forecast.city}`
      


})

let btn = document.getElementById('btn')
btn.addEventListener('click', /* => */ {})

//create display fields for the output

//call up weather data