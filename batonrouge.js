// Baton Rouge, LA weather pojo
var batonRougeWeather={
    "latitude": 30.420446,
    "longitude": -91.024605,
    "generationtime_ms": 18.56386661529541,
    "utc_offset_seconds": 0,
    "timezone": "GMT",
    "timezone_abbreviation": "GMT",
    "elevation": 11,
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
        "time": "2025-08-27T01:00",
        "interval": 900,
        "temperature": 29.1,
        "windspeed": 8.2,
        "winddirection": 165,
        "is_day": 0,
        "weathercode": 1
    }
}
onEvent("showWeatherb", "click", function(){
// Display weather data
setText("tempb", batonRougeWeather.current_weather.temperature);
setText("windb", batonRougeWeather.current_weather.windspeed);
setText("codeb", batonRougeWeather.current_weather.weathercode);
console.log(batonRougeWeather);
});
console.log(batonRougeWeather);