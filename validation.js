const Joi = require('joi');

const validateInput = async (req,res,next) => {
    const a=req.body.a;
    const b=req.body.b;
    if(isNaN(a) || isNaN(b)){
        throw new Error('Invalid input');
    }
    next();
}

module.exports = validateInput;