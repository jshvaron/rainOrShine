// Sets up API key
const APIKey = '5072822e38b72f252227ac7250f60b68';
// let city; allows placeholder for variable to be reassigned
var city;

// assigns Variables fo search button, input ('searcher'), output to p element
const button = document.getElementById('btn');
const citySearch = document.getElementById('searcher');
const cityLog = document.getElementById('city-name');
const cityList = document.getElementById('city-list');


// waits for click, takes user input and renders a p tag that passes user input with a max of 9 searches. This max is set to fill the container appropriatly. Alert will populate a msg for premium content. That will be used for future implementation
const MAX_CITY_SEARCH = 9; // Maximum number of searches to display
button.addEventListener('click', () => {
  const pCount = cityList.querySelectorAll('p').length; // Get the number of p elements in the section
  if (pCount < MAX_CITY_SEARCH) { // Check if the maximum limit is not reached
    const newcity = document.createElement('p'); // Create a new p element
    newcity.textContent = citySearch.value; // Set the text content of the new city
    cityList.appendChild(newcity); // Add the new city to the search area
  } else{
    // lol
    alert('To search the Weather in more cities, see our Premium Subsricption.')
  }
});












// gets weather from API based off user input 
function getWeather() {
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=dallas&appid=5072822e38b72f252227ac7250f60b68" 
    fetch(queryURL)
        .then(res => res.json())
        .then(data => console.log(data))
};
getWeather();