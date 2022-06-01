const trim = function() {
    str = '  FunctionUp  '
    console.log(str.trim())
}

const lower = function() {
    str = 'FunctionUp Radon Cohort'
    console.log(str.toLowerCase())
}

const upper = function() {
    str = 'FunctionUp Radon Cohort'
    console.log(str.toUpperCase())
}


module.exports.trim = trim
module.exports.lower = lower
module.exports.upper = upper