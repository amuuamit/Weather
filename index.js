const apiKey = "515467f4f4b1c7408a309fcbb19ff70e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=matric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
try {
async function checkWeather(city) {
   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
   const weather = document.querySelector(".weather").style.display = "block";
   

   var data = await response.json();
   console.log(data);

   document.querySelector(".city").innerHTML = data.name;
   document.querySelector(".temp").innerHTML = Math.floor(data.main.temp/10)+ "°C";
   document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
   document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    
   if(data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
   }
   else if(data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
   }
   else if(data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
   }
   else if(data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
   }
   else if(data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
   }


}
searchBtn.addEventListener("click", (event)=> {
    // event.preventDefault();
    checkWeather(searchBox.value)
})

}
catch(err) {
    // console.log("please Enter A valid city");
    // document.querySelector(".error").innerHTML = "please Enter the Valid City Name";
    console.log(err);
}
// checkWeather();