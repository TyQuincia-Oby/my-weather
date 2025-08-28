//Weather data POJO
var atlantaWeather= {
    "latitude": 33.759865,
    "longitude": -84.39587,
    "generationtime_ms": 0.0654458999633789,
    "utc_offset_seconds": 0,
    "timezone": "GMT",
    "timezone_abbreviation": "GMT",
    "elevation": 317,
    "current_weather_units": {
        "time": "iso8601",
        "interval": "seconds",
        "temperature": "°C",
        "windspeed": "km/h",
        "winddirection": "°",
        "is_day": "",
        "weathercode": "wmo code"
    },
    "current_weather": {
        "time": "2025-08-27T01:15",
        "interval": 900,
        "temperature": 21.2,
        "windspeed": 8,
        "winddirection": 297,
        "is_day": 0,
        "weathercode": 3
    }
}
    ; 
// Display weather data
setText("temp", atlantaWeather.current_weather.temperature);
setText("wind", atlantaWeather.current_weather.windspeed);
setText("code", atlantaWeather.current_weather.weathercode);
console.log(atlantaWeather);