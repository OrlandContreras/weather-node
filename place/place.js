const axios = require('axios');


// Function Place Latitud/Longitud
const getPlaceLatLng = async (address) => {

    let encodeUrl = encodeURI( address );

    let res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`);
    
    if (res.data.status === 'ZERO_RESULTS') {
        throw new Error(`There is no result for the city ${ address }`);
    }
    
    let location = res.data.results[0];
    let coors = location.geometry.location;

    return {
        address: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getPlaceLatLng
}
