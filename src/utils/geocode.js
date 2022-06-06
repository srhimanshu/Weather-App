const request = require('request');

const geocode = (address,callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic3JoaW1hbnNodSIsImEiOiJjbDNiZGMxZ3AwNmZvM2JxcWVmN3RyMW1oIn0.OElY_Q2J6vEu76gFgF-qOw`;
    // console.log(url)
    request({url,json:true},(err,res,body)=>{
            try{
                const place_name = body.features[0].place_name;
                const latitude = body.features[0].center[0];
                const longitude = body.features[0].center[1];
                // console.log(place_name);
                // console.log(latitude);
                // console.log(longitude);
                callback(undefined,{
                    latitude : latitude,
                    longitude : longitude,
                    place_name : place_name
                })
            } catch(error){
                // console.log(body);
                const displayGeoError = "Please enter valid address";
                // console.log(displayGeoError);
                callback(displayGeoError,undefined);
            }       
    });
}

module.exports = geocode;