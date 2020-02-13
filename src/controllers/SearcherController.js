const Dev = require('../models/Dev');
const axios = require('axios');
const parseStringasArray =require('../utils/parseStringasArray');

module.exports={
    async index(req,resp){
        const {latitude,longitude,techs}=req.query;
        const techsArray = parseStringasArray(techs);

        const dev = await Dev.find({
            techs:{
                $in:techsArray
            },
            location:{
                $near:{
                    $geometry:{
                        type:'Point',
                        coordinates:[longitude,latitude]
                    },
                    $maxDistance:10000,
                },
            }
        });

        return resp.json({dev:dev});

    } 
}