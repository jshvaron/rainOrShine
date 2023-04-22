// Sets up API key
const APIKey = '5072822e38b72f252227ac7250f60b68';

// let city; allows placeholder for variable to be reassigned
var city;




function getWeather() {
   var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=5072822e38b72f252227ac7250f60b68";
    fetch(requestUrl)
        .then(res => res.json())
        .then(data => console.log(data))
};
getWeather();