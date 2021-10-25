//create a field to intake location data (index1.html)

//Weather info API
const form = document.getElementById('weatherLocationForm')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);
    let cityName = e.target.cityName.value
})

const getWeather = async function(weather){
    let response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${cityname},${statecode}&appid={ebf4c782db662e7c38c7ccddf83a3ef1}`)
    let data = await response.json()
    return data
}

const weatherForm = document.getElementById('weatherForm');

weatherForm.addEventListener('submit', async (e) =>{
    e.preventDefault();
    let highTemp = e.target.cityName
    console.log(highTemp);
    let highTemp = await getWeather(highTemp)
    let labelHigh = document.createElement('h3');
    labelHigh.innerHTML = `${highTemperature.cityName}`

    let lowTemp = e.target.cityName
    console.log(lowTemp);
    let lowTemp = await getWeather(lowTemp)
    let labelLow = document.createElement('h3');
    labelLow.innerHTML = `${lowTemperature.cityName}`

    let humidity = e.target.cityName
    console.log(humidity);
    let humidity = await getWeather(humidity)
    let labelHum = document.createElement('h3');
    labelHum.innerHTML = `${humidity.cityName}`

    let forecast = e.target.cityName
    console.log(forecast);
    let forecast = await getWeather(forecast)
    let labelFore = document.createElement('h3');
    labelFore.innerHTML = `${forecast.cityName}`
      

    document.body.append(labelHigh);
    document.body.append(labelLow);
    document.body.append(labelHum);
    document.body.append(labelFore);


})

let btn = document.getElementById('btn')
btn.addEventListener('click', /* => */ {})

//create display fields for the output
