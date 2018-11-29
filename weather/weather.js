const axios = require('axios');

const getWeather = async (lat, lng) => {
    let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=b678d5dc8cf5595c32c9bd8a3127b9b5`);

    return res.data.main.temp;
}

module.exports = {
    getWeather
}