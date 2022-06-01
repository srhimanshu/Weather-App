const request = require('request');

const forecast = ({latitude,longitude},callback)=>{
    // console.log(`${geoResponse.latitude} , ${geoResponse.longitude}`)
    const url = `http://api.weatherstack.com/current?access_key=208f2c5472e2f31fc8b1162ce56b1422&query=${latitude},${longitude}`;
    console.log(url)
    let isError = false;
    request({url,json:true},(error,response)=>{
        try{
            isError = response.body.error.code===615;
        } catch(error){
           
        }
        console.log(isError)
        if(isError){
            callback('Unable to connect to location service',undefined)
        }
        else if(response.body.current.length === 0){
            callback('Unable to find location, try another address!',undefined)
        }
        else{
            // console.log({
            //     temperature: response.body.current.temperature,
            //     humidity : response.body.current.humidity
            //     // Location_Name : response.body.location.name
            // })
            callback(undefined,{
                temperature: response.body.current.temperature,
                humidity : response.body.current.humidity,
                Location_Name : response.body.location.name
            })
        }
    })
}

module.exports = forecast;