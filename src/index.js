const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const dateTime = require('node-datetime')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionupassignment:msJISmjxvX4gvZ9W@functionup.nyvlz.mongodb.net/middleware1", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        var ip = req.socket.remoteAddress;
        var dt = dateTime.create();
        var format = dt.format('Y-m-d H:M:S');
        console.log(format + " , " + ip + " , " + req.originalUrl);
        next();
  }
  );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
