const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=53f23142a8763c921f438a9baee0b016';

module.exports = {
    getTemp: function(city){
        //to format url (%20 and stuff)
        let encodedLocation = encodeURIComponent(city)
        let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        //to handle unexisting cities in search field
        return axios.get(requestUrl).then(function(res) {
            //debugger;
            if(res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res) {
            throw new Error(res.data.message);
        });
    }
}