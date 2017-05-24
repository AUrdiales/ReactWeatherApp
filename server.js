var express = require('express');
var port = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
    if(req.headers['x-forwarded-proto'] = 'http') {
        next();
    } else{
        res.redirect('http://' + req.hostname + req.url);
    }
});

app.listen(port, () => {
    console.log(`Server listenting at ${port}`);
})