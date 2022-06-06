const request = require('request');

const forecast = ({latitude,longitude,place_name},callback) =>{
    const url = `http://api.weatherstack.com/current?access_key=208f2c5472e2f31fc8b1162ce56b1422&query=${latitude},${longitude}`;
    // console.log(url);

    request({url,json:true},(res,err,body)=>{
        try{
            const temperature = body.current.temperature;
            const weather_descriptions = body.current.weather_descriptions;
        
            // console.log(temperature);
            // console.log(weather_descriptions[0]);

            callback(undefined,`Weather for ${place_name} is ${weather_descriptions} and the temperature is ${temperature}`);
        } catch(error){
            // console.log(body);
            const displayForError = 'Data not found on provided geographical Location.';
            // console.log(displayForError)

            callback(displayForError,undefined);
        }
        
    })
}

module.exports = forecast;