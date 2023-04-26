// Sets up API key
$(document).ready(function() {



    const searchbutton = document.getElementById('btn');
    const citySearch = document.getElementById('searcher');
    const cityList = document.getElementById('city-list');
    const button = document.getElementsByTagName('button');
    const MAX_CITY_SEARCH = 10; // Maximum number of searches to display
    // let city; allows placeholder for variable to be reassigned
    var city;
    city;
    
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
        // lol caps city count at 10 searches
        alert('To search the Weather in more cities, see our Premium Subsricption.')
      };
    
      
    });

    //  clicks on the doc log the text inside the clicked el(specifically buttons)
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('cityName')) {
          const cityName = event.target.textContent;
          const APIKey = '5072822e38b72f252227ac7250f60b68';

          console.log(`${cityName} has been searched and logged to History`);
            // Make API request using cityName as input
            // TODO:
            // when button form cityList is clicked
            // the value is = to lat and long
            // if it = lat and long then it will pull the needed data
            // gets weather from API based off user input 
            function getWeather() {
                const locationQueryURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${APIKey}` 
                fetch(locationQueryURL)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // loops through data paramater that is pulled from our fetch to the API to get Lat and long
                        for (var i = 0; i < data.length; i++) {
                            console.log(`${cityName} has a lattitude of: ${data[i].lat} and a longitude of:${data[i].lon}`)

                            const weatherQueryURL = `https://api.openweathermap.org/data/2.5/weather?lat=${data[i].lat}&lon=${data[i].lon}&units=imperial&appid=5072822e38b72f252227ac7250f60b68`
                            // fetches new query URL w/ lat,lon, and imperial data
                            fetch(weatherQueryURL)
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data);

                                    // grabs currentTables and inserts currentWeathertables1 as a new card with the data from the API call.
                                    const currentWeatherTables = document.getElementById('currentTables')
                                    const currentWeathertable1 = `
                                    <div id="mostCurrentWeather"> 
                                        <figure>City: ${data.name} <img src='https://openweathermap.org/img/wn/${data.weather[0].icon}.png' </figure>
                                        <figure>Temperature: ${data.main.temp} °F </figure>
                                        <figure>Wind: ${data.wind.speed} mph</figure>
                                        <figure>Humidity: ${data.main.humidity}%</figure>
                                    </div>`;
                                    const fiver = `
                                    <aside>
                                    <div id="day-1" class="days" >
                                        <h3 class="dayInfo">Date</h3>
                                        <p>Temperature:</p>
                                        <p>Humidity:</p>
                                        <p>Wind:</p>
                                    </div>
                                    <div id="day-2" class="days" >
                                        <h3 class="dayInfo">Date</h3>
                                        <p>Temperature:</p>
                                        <p>Humidity:</p>
                                        <p>Wind:</p>
                                    </div>
                                    <div id="day-3" class="days" c>
                                        <h3 class="dayInfo">Date</h3>
                                        <p>Temperature:</p>
                                        <p>Humidity:</p>
                                        <p>Wind:</p>
                                    </div>
                                    <div id="day-4" class="days" >
                                        <h3 class="dayInfo">Date</h3>
                                        <p>Temperature:</p>
                                        <p>Humidity:</p>
                                        <p>Wind:</p>
                                    </div>
                                    <div id="day-5" class="days" >
                                        <h3 class="dayInfo">Date</h3>
                                        <p>Temperature:</p>
                                        <p>Humidity:</p>
                                        <p>Wind:</p>
                                    </div>
                                </aside>`

                                    // replaces empty current weather place holder with newly rendered weather card with user input. If user input card already exist, when a new cityButton is clicked it will replace the weather card that is displayed.
                                    currentWeatherTables.innerHTML = '';
                                    let cardRemover = document.getElementById('currentWeather')
                                    if(cardRemover){
                                        currentWeatherTables.removeChild(cardRemover);
                                    }
                                    currentWeatherTables.insertAdjacentHTML('beforeend', currentWeathertable1);
                                
                                });

                            
                        }
                    })
                // .catch(error => console.error(error));



            };
            getWeather();
        
        
        };
        
    });

    
    
    // `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${APIKey}` 

    // http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

    // http://api.openweathermap.org/geo/1.0/reverse?lat=32.7762719&lon=-96.7968559&limit=1&appid=5072822e38b72f252227ac7250f60b68

    // https://api.openweathermap.org/data/2.5/forecast?lat=32.7762719&lon=-96.7968559&units=imperial&appid=5072822e38b72f252227ac7250f60b68



});
