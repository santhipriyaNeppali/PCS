    const api = require('../api/api');
    const express = require('express');
    const router = express.Router();

    /**
     * Handles the routing for suburb search with postcode
     */
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

    /**
     * Handles the routing for narby suburbs search with lat, lon and distance (radius)
     */
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