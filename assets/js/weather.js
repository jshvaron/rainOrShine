// Sets up API key
const APIKey = '5072822e38b72f252227ac7250f60b68';
// let city; allows placeholder for variable to be reassigned
var city;

// assigns Variables fo search button, input ('searcher'), output to p element
const button = document.getElementById('btn');
const citySearch = document.getElementById('searcher');
const cityLog = document.getElementById('city-name');

// takes input and displays at p element under search bar
function getCity(cityInput){
    cityLog.innerHTML = cityInput;
}
//  listens for button click and pulls user input to display in function above
button.addEventListener('click', () => {
    getCity(searcher.value);
    console.log(searcher.value)

});


// gets weather from API based off user input 
function getWeather() {
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=dallas&appid=5072822e38b72f252227ac7250f60b68" 
    fetch(queryURL)
        .then(res => res.json())
        .then(data => console.log(data))
};
getWeather();