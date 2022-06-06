const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs')

const dirPath = path.join(__dirname,`../public`);
const viewsPath = path.join(__dirname,`../templates/views`);
const partialsPath = path.join(__dirname,`../templates/partials`);
<<<<<<< HEAD
const port = process.env.PORT || 3000;
=======
>>>>>>> a50e6a9cd44838074d9704d30384f27a0272c3c7

app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(dirPath));
app.get('',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.get('/weather',(req,res)=>{
    const address = req.query.address;
    if(!address){
        res.send({
            error : 'Please provide Location!'
        })
    } else{
        geocode(address,(geoErr,geoRes)=>{
            if(geoErr){
                res.send({goeErr});
            } else{
                forecast(geoRes,(forErr,forRes)=>{
                    if(forErr){
                        res.send({forErr});
                    } else{
                        res.send({forRes});
                    }
                })
            }
        });
    }
})

<<<<<<< HEAD
app.listen(port,()=>{
=======
app.listen(3000,()=>{
>>>>>>> a50e6a9cd44838074d9704d30384f27a0272c3c7
    console.log("Express Server listening to port 3000...")
})