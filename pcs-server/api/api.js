const fetch = require('node-fetch');

const api_url = process.env.api_url || "http://v0.postcodeapi.com.au/";

const api_suburbs_url = api_url+"suburbs.json";

/**
 * Returns Promise of Http request to get suburb based on postcode
 * from rest API
 * @param params request params of client URL
 */
async function getSuburbs(params) {
    const response = await fetch(api_suburbs_url+"?postcode="+params.code+"");
    const json =  await response.json();
    return json;
}

/**
 * Returns Promise of Http request to get nearby suburbs based on lat,lon and distance
 * from rest API
 * @param params request params of client URL
 */
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

