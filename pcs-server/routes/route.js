    const api = require('../api/api');
    const express = require('express');
    const router = express.Router();

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