function convertTime(differenceHours, differenceMinutes){

    //the time here +/- the difference
    let currentTime = new Date();
    currentTime.setHours(currentTime.getHours()+differenceHours);
    currentTime.setMinutes(currentTime.getMinutes()+differenceMinutes);
    console.log(currentTime);
    let convertedTime= currentTime;
    return convertedTime;
}

const MMRweatherURL = "https://api.open-meteo.com/v1/forecast?latitude=21&longitude=96&hourly=temperature_2m&forecast_days=1";

function getMyanmarWeather() {
    let MMRCurrentTime = convertTime(5,30);

    fetch(MMRweatherURL)
        .then((response) => response.json())
        .then(data => {
            let minutes = MMRCurrentTime.getMinutes();
            
//if statement to show the "0" in minutes when time is single digits
            if (minutes < 10) {
                minutes = "0" + minutes;
            }

            document.getElementById("myanmar").innerHTML =
                "Myanmar Current Time: " +
                MMRCurrentTime.getHours() + ":" + minutes +
                "<br>Myanmar Weather Data: " +
                data.hourly.temperature_2m[MMRCurrentTime.getHours()] +
                " " + data.hourly_units.temperature_2m;
        })
        .catch(error => {
            document.getElementById("myanmar").innerHTML =
                "Could not load Myanmar weather.";
            console.log(error);
        });
}

const ITLweatherURL = "https://api.open-meteo.com/v1/forecast?latitude=42.8333&longitude=12.8333&hourly=temperature_2m";

function getItalyWeather() {
    let ITLCurrentTime = convertTime(1,0);

    fetch(ITLweatherURL)
        .then((response) => response.json())
        .then(data => {
            let minutes = ITLCurrentTime.getMinutes();

            if (minutes < 10) {
                minutes = "0" + minutes;
            }

            document.getElementById("italy").innerHTML =
                "Italy Current Time: " +
                ITLCurrentTime.getHours() + ":" + minutes +
                "<br>Italy Weather Data: " +
                data.hourly.temperature_2m[ITLCurrentTime.getHours()] +
                " " + data.hourly_units.temperature_2m;
        })
        .catch(error => {
            document.getElementById("italy").innerHTML =
                "Could not load Italy weather.";
            console.log(error);
        });
}