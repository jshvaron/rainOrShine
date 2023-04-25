// Sets up API key
$(document).ready(function() {

    const APIKey = '5072822e38b72f252227ac7250f60b68';
    // let city; allows placeholder for variable to be reassigned
    var city;
    
    // assigns Variables fo search button, input ('searcher'), output to p element
    const searchbutton = document.getElementById('btn');
    const citySearch = document.getElementById('searcher');
    const cityList = document.getElementById('city-list');
    // TODO: comment back in once function is ready
    // const cityButtons = document.querySelectorAll('cityName');
    const button = document.getElementsByTagName('button');
    const MAX_CITY_SEARCH = 15; // Maximum number of searches to display
    
    console.log(button);
        
    
    // waits for click, takes user input and renders a p tag that passes user input with a max of 15 searches. This max is set to fill the container appropriatly. Alert will populate a msg for premium content. That will be used for future implementation
    searchbutton.addEventListener('click', () => {
    
      const pCount = cityList.querySelectorAll('button').length; // Get the number of button elements in the section
      if (pCount < MAX_CITY_SEARCH) { // Check if the maximum limit is not reached
        // if max is not reached, the following will create a new button for the user input 'city' to live in.
        const input = citySearch.value;
        const newCityButton = `<button class='cityName'>${input}</button`;
        console.log(citySearch.value);
        cityList.insertAdjacentHTML('beforeend', newCityButton);
        citySearch.value = '';
        

      } else{
        // lol
        alert('To search the Weather in more cities, see our Premium Subsricption.')
      };
    
      
    });

    // Queries clicks on the doc and logs the text inside the clicked el
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('cityName')) {
          const cityName = event.target.textContent;
          console.log(`Clicked on city: ${cityName}`);
            // Make API request using cityName as input
            // TODO:
            // when button form cityList is clicked
            // the value is = to lat and long
            // if it = lat and long then it will pull the needed data
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
    


});
