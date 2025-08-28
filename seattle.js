var seattleWeather={
    "latitude": 47.60265,
    "longitude": -122.28637,
    "generationtime_ms": 0.06091594696044922,
    "utc_offset_seconds": 0,
    "timezone": "GMT",
    "timezone_abbreviation": "GMT",
    "elevation": 93,
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
        "temperature": 26.5,
        "windspeed": 10.3,
        "winddirection": 335,
        "is_day": 1,
        "weathercode": 0
    }
};
// Display weather data
setText("temp", seattleWeather.current_weather.temperature);
setText("wind", seattleWeather.current_weather.windspeed);
setText("code", seattleWeather.current_weather.weathercode);
console.log(seattleWeather);