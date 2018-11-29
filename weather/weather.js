const axios = require('axios');

const getWeather = async (lat, lng) => {
    let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=YOUR_KEY`);

    return res.data.main.temp;
}

module.exports = {
    getWeather
}