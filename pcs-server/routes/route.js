    const api = require('../api/api');
    const fetch = require('node-fetch');
    
    const express = require('express');
    const router = express.Router();

    router.get('**',(req,res,next)=>{
        res.setHeader('Access-Control-Allow-Origin','*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
        next();
    })

    router.get('/suburbs/:code' , (req,res,next)=>{
        const response = api.getSuburbs(req.params);
        var result = response.then(
        response =>{
            res.status(201).send(response);
            return res;
        },
        err => {
            res.status(500).json({
                error: err
            }
        )});
    });
    
    router.get('/suburbs/:latitude/:longitude/:distance' , (req,res,next)=>{
        const response = api.getSuburbsByDistance(req.params);
        var result = response.then(
        response => {
            res.status(201).send(response)
            return res;
        },err => {
            console.log(error);
            response.status(500).json({
                error: err
            })
        });
    });
    

    module.exports = router;