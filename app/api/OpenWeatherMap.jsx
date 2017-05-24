import axios from 'axios';

const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/find?units=metric&appid=807dc1dd998d4c728d44b6e42c175ef6`;

//key API 807dc1dd998d4c728d44b6e42c175ef6
//ejemplo de query http://samples.openweathermap.org/data/2.5/find?q=London&units=metric&appid=807dc1dd998d4c728d44b6e42c175ef6


module.exports = {
    getTemp:  (location) => {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${location}`;

       return axios.get(requestUrl).then(function(res){
            if(res.data.list[0].main.temp){
                return res.data.list[0].main.temp;
            }
        }, function(res) {
            throw new Error(res.data.message);
        });
    }
        
}