const { getPlaceLatLng } = require('./place/place');
const { getWeather } = require('./weather/weather');

const argv = require('yargs').options({
    address: {
        alias: 'd',
        desc: 'City address for get to weather',
        demand: true
    }
}).argv;


let getInfoWeather = async ( address ) => {
    let coors = await getPlaceLatLng(argv.address);
    let temp =  await getWeather(coors.lat, coors.lng);

    return `The weather in ${ coors.address } is ${ temp } C`;
}

getInfoWeather( argv.address )
    .then( info => console.log(info) )
    .catch( e => console.log(e));