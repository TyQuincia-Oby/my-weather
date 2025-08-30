//Weather data POJO
var newOrleansWeather = {
    "latitude": 29.95,
    "longitude": -90.07,
    "current_weather": {
        "temperature": 31.2,
        "windspeed": 4.5,
        "weathercode": 1
    }
};
onEvent("showWeather", "click", function () {
    // Display weather data
    setText("temp", newOrleansWeather.current_weather.temperature);
    setText("wind", newOrleansWeather.current_weather.windspeed);
    setText("code", newOrleansWeather.current_weather.weathercode);
    console.log(newOrleansWeather);
});
//Weather data POJO
var atlantaWeather = {
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
onEvent("showWeathera", "click" ,function () {
    // Display weather data
    setText("tempA", atlantaWeather.current_weather.temperature);
    setText("windA", atlantaWeather.current_weather.windspeed);
    setText("codeA", atlantaWeather.current_weather.weathercode);
    console.log(atlantaWeather);
});
// Baton Rouge, LA weather pojo
var batonRougeWeather = {
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
onEvent("showWeatherb", "click", function () {
    // Display weather data
    setText("tempb", batonRougeWeather.current_weather.temperature);
    setText("windb", batonRougeWeather.current_weather.windspeed);
    setText("codeb", batonRougeWeather.current_weather.weathercode);
    console.log(batonRougeWeather);
});

var seattleWeather = {
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
onEvent("showWeathers", "click", function () {
    // Display weather data
    setText("temps", seattleWeather.current_weather.temperature);
    setText("winds", seattleWeather.current_weather.windspeed);
    setText("codes", seattleWeather.current_weather.weathercode);
    console.log(seattleWeather);

});

function fetchNewOrleansWeather() {
    console.log("hello from newOrelansWeather");
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    fetch("https://api.open-meteo.com/v1/forecast?latitude=30.413564&longitude=-91.0227229&current_weather=true", requestOptions)
    then((response) => response.json())
        .then(function (result) {
            console.log(result);








        })
        .catch((error) => console.error(error));
}

