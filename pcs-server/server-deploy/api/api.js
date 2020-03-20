const api_url = "http://v0.postcodeapi.com.au/";
const api_suburbs_url = api_url+"suburbs.json";
const fetch = require('node-fetch');


async function getSuburbs(params) {
    const response = await fetch(api_suburbs_url+"?postcode="+params.code+"");
    const json =  await response.json();
    return json;
}

async function getSuburbsByDistance(params) {
    const response = await fetch(api_url+"radius.json?latitude="+params.latitude+
    "&longitude="+params.longitude+"&distance="+params.distance);
    const json =  await response.json();
    return json;
}

module.exports = {
    getSuburbs : getSuburbs,
    getSuburbsByDistance: getSuburbsByDistance
}

