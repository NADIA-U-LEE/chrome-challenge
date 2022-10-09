const API_KEY = "5749c9f95c10b4f9e7e3eea60b19c203";

function onGeoOk(position) {
 const lat = position.coords.latitude;
 const lon = position.coords.longitude;  
 const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric` 
 fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = `${data.name}`
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}도`; 
 });
}

function onGeoError() {
    alert("날씨 정보를 찾을 수 없어요!")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);