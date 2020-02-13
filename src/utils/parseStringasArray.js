module.exports=
    function  parseStringasArray (techs) {
        return techs.split(',').map(tech => tech.trim());
        
    }    
