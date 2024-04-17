const apiKey = "dad70f5297a00bf30bcf119d0bc3760a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox =  document.querySelector(".search input")
const searchBtn =  document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather(City){
    const response = await fetch(apiUrl +  City +`&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else{ var data = await response.json();
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "cloudy.png"
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "sunny.png"
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "rainy.png"
        }
        else if(data.weather[0].main == "Drizzle" ){
            weatherIcon.src = "drizzle.png"
        }
        else if(data.weather[0].main == "Mist" ){
            weatherIcon.src = "mist.jfif"
        }
        document.querySelector('.weather').style.display = 'block'
        document.querySelector('.error').style.display = 'none'
        document.querySelector(".designedBy").style.display = 'block'
    }
   
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
});