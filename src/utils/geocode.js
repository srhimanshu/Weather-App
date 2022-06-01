const { response } = require('express');
const request = require('request');
const { paramsHaveRequestBody } = require('request/lib/helpers');

const geocode = (address,callback)=>{
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic3JoaW1hbnNodSIsImEiOiJjbDNiZGMxZ3AwNmZvM2JxcWVmN3RyMW1oIn0.OElY_Q2J6vEu76gFgF-qOw&limit=1`;
    // console.log("geocode function starts")
    request({url,json:true},(error,response)=>{
        // console.log('request function starts')
        if(error){
            // console.log("error occurs")
            callback('Unable to connect to location service',undefined)
        }
        else if(response.body.features.length === 0){
            // console.log("body length 0")
            callback('Unable to find location, try another address!',undefined)
        }
        else{
            // console.log({
            //     latitude : response.body.features[0].center[0],
            //     longitude : response.body.features[0].center[1],
            //     location : response.body.features[0].place_name
            // })
            // console.log("callback function calling");
            callback(undefined,{
                latitude : response.body.features[0].center[0],
                longitude : response.body.features[0].center[1],
                location : response.body.features[0].place_name
            })
            // console.log('callback function ends')
        }
        // console.log('request function ends')
    })
    // con  sole.log('geocode function ends');
}

module.exports = geocode;
