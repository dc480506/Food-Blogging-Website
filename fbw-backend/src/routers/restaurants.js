const express= require('express');
const router = express.Router();
const fetch   = require('node-fetch');

const zomato_URL="https://developers.zomato.com/api/v2.1"
const zomato_key="c3b4720dc374f0a3d792ba3365dbbabd"
function isFloat(val) {
    var floatRegex = /^-?\d+(?:[.,]\d*?)?$/;
    if (!floatRegex.test(val))
        return false;

    val = parseFloat(val);
    if (isNaN(val))
        return false;
    return true;
}

function isInt(val) {
    var intRegex = /^-?\d+$/;
    if (!intRegex.test(val))
        return false;

    var intVal = parseInt(val, 10);
    return parseFloat(val) == intVal && !isNaN(intVal);
}

router.post('/fetch-restaurants',(req,res,next)=>{
    console.log(req.body)
    if(req.body.lat && req.body.lon){
        if(isFloat(req.body.lat) && isFloat(req.body.lon)){
            next();
        }else{
            return res.status(400).json({ error:"Invalid co-ordinates" })
        }
    }else if(req.body.q && req.body.count){
        let regex=/^[[_@./#&$+-]*[ A-Za-z0-9]+[_@./#&$+-]*]*$/;
        if(isInt(req.body.count) && regex.test(req.body.q)){
            next();
        }else{
            return res.status(400).json({ error:"Invalid Search" })
        }

    }else{
        return res.status(400).json({error:"Invalid Request"})
    }
})

router.post('/fetch-restaurants',(req,res)=>{
    let url;
    let nearby=true;
    if(req.body.lon){
        url=`${zomato_URL}/geocode?lon=${req.body.lon}&lat=${req.body.lat}`;
    }else{
        url=`${zomato_URL}/search?q=${req.body.q}&count=${req.body.count}`
        nearby=false;
    }
    fetch(url,{
        mode: "cors",
        headers:{
            'user-key': zomato_key
          }
    })
    .then(result => result.json())
    .then(data => {
        res.json(nearby?data.nearby_restaurants:data.restaurants);
    })
    .catch(err => {
        res.send(err);
    });
})

router.get('/location',(req,res)=>{
    let url=`${zomato_URL}/geocode?lon=${req.query.lon}&lat=${req.query.lat}`
    fetch(url,{
        mode: "cors",
        headers:{
            'user-key': zomato_key
          }
    })
    .then(result => result.json())
    .then(data => {
        res.json(data.location);
    })
})

module.exports=router;