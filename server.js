var express = require('express');
var port = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + "/public"));
app.use("/styles",express.static(__dirname + "/bower_components"));
app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

app.listen(port, () => {
    console.log(`Server listenting at ${port}`);
})