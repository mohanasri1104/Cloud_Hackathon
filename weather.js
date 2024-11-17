let cityInput = document.getElementById("city-input")
let submit = document.getElementById("submit")

let display = document.querySelector(".display")
let tempDisplay = document.querySelector(".temp-cel-input")

let tempCel = document.querySelector(".temp-cel-input")
let tempFah = document.getElementById("temp-fah-input")
let winDeg = document.getElementById("win-deg-input")
let winDir = document.getElementById("win-dir-input")
let winKph = document.getElementById("wind-kph-input")

let heatCel = document.getElementById("heatindex-cel-input")
let heatFah = document.getElementById("heatindex-fah-input")
let humid = document.getElementById("humidity-input")
let pressure = document.getElementById("pressure-input")
let uvInd = document.getElementById("uv-index-input")

submit.addEventListener("click", function(){

console.log(cityInput.value)

let getWeather = async (city) => {
    let weatherAPI = 'http://api.weatherapi.com/v1/current.json?key=4f18772c02454da5ac605929241610&q='+city+''
    let weatherObj = await fetch(weatherAPI)
    let response = weatherObj.json()
    return response
}


async function callWeather(){
    getWeather(cityInput.value)
    .then((response) => {
        //updating important weather information

        console.log(response)
        tempCel.innerText = response['current']['temp_c'] + " Deg Celsius"
        tempFah.innerText = response['current']['temp_f'] 
        winDeg.innerText = response['current']['wind_degree']
        winDir.innerText = response['current']['wind_dir']
        winKph.innerText = response['current']['wind_kph']

        //updating others
        heatCel.innerText = response['current']['heatindex_c']
        heatFah.innerText = response['current']['heatindex_f']
        humid.innerText = response['current']['humidity']
        pressure.innerText = response['current']['pressure_mb']
        uvInd.innerText = response['current']['uv']

        display.style.display = "flex"
        tempDisplay.style.display = "block"

    })
    .catch((error) => {
        console.log(error)
    })
}

callWeather()

})

//Google Maps JavaScript API
//Google Places API