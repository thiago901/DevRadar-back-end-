const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringasArray =require('../utils/parseStringasArray');

module.exports={
    async index(req, resp) {
        const devs = await Dev.find();
        return resp.json(devs);
    },
    async store (req,resp){
        const {github_username , techs,latitude,longetude }=req.body;

        let dev = await Dev.findOne({github_username});
        if(!dev){
            const responseApi = await axios.get(`http://api.github.com/users/${github_username}`);
            const { name = login,avatar_url,bio }=responseApi.data;
        
            const arrayTechs = parseStringasArray(techs);
            const location = {
                type: "Point",
                coordinates:[longetude,latitude]
            };
    
          
        
            dev = await Dev.create({
                name,
                github_username,
                bio,
                avatar_url,
                techs:arrayTechs,
                location
            });
        }
       
        
        return resp.json(dev);
    }

}