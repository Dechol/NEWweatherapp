// alert('weather app')

//api function- weather key
//5ac61e4503ebfe1078a46bc85331d26d

// api call
//http://api.openweathermap.org/geo/1.0/direct?
//q={city name},{state code},{country code}&limit={limit}&appid={API key}

//http://api.openweathermap.org/geo/1.0/direct?
// q=nottingham&appid=5ac61e4503ebfe1078a46bc85331d26d

https://api.openweathermap.org/data/2.5/weather?q=nottingham&APPID=5ac61e4503ebfe1078a46bc85331d26d


// URL (required), options (optional)
fetch('https://api.openweathermap.org/data/2.5/weather?q=nottingham&APPID=5ac61e4503ebfe1078a46bc85331d26d',{
    mode: 'cors'
  })
  .then(function(response) {
    return response.json()
    })
    .then(function(response) {
        console.log(response)
        console.log(response.main.temp)
        console.log(response.main.feels_like)
        console.log(response.weather[0].main)
        console.log(response.weather[0].description)
      })
  .catch(function(err) {
    console.log(err)
  });

  