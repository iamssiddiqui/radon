const validator = function ( req, res, next) {
    const head = req.headers['isFreeAppUser']
    if(head==undefined){
        res.send("please give isFreeAppUser status")
    }
    else{

    console.log("Hi I am a middleware named validator")
    next()
    }
}

module.exports.validator = validator