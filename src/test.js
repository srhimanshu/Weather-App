const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Philadelphia',(err,res)=>{
    console.log('geocode function starts calling from test.js')
    console.log(res);
    console.log(err);
    console.log('geocode function ends calling from test.js')
})