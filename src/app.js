console.log('for newly committed code')
const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


const htmlDirPath = path.join(__dirname,"../public");
const viewsPath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");

app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(htmlDirPath));

app.get('',(req,res)=>{
    res.render('index',{
        title : 'Weather App',
        name : 'Himanshu Khandelwal'
    });
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title : 'About Page',
        name : 'Himanshu Khandelwal'
    });
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title : 'Help Page',
        name : 'Himanshu Khandelwal'
    });
})

app.get('/products',(req,res)=>{
    if(!req.query.search)
    {
        return res.send({
            error : 'You must provide a search term.'
        })
    }

    console.log(req.query.search);
    res.send({
        products : []
    })
})

app.get('/weather',(req,res)=>{
    const address = req.query.address;
    if(!address)
    {
        return res.send({
            error : 'Please provide address'
        })
    }
    
    geocode(address,(geoError,{latitude,longitude})=>{
        
        if(geoError){
            res.send({geoError})
        }
        else{
            forecast({latitude,longitude},(forecaseError,{temperature,Location_Name} = {})=>{
                if(forecaseError){
                     res.send({forecaseError})
                 }
                 else{
                     try{
                        res.send({
                            forecast: temperature,
                            location : address,
                            address : Location_Name
                        })
                     } catch(error){
                        console.log(error)
                     }
                   
                 }
                 
             })
        }
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title : '404',
        name : 'Himanshu Khandelwal',
        errorMessage :'Help Artcile not found.'
    });
})

app.get('/*',(req,res)=>{
    res.render('404',{
        title : '404',
        name : 'Himanshu Khandelwal',
        errorMessage : 'Page Not Found'
    });
})

app.listen('3000',()=>{
    console.log('Server listening to port 3000');
})