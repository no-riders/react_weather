//jshint esnext: true
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

//redirect https trafic to http, due to  openweather api
app.use((req, res, next) => {
    if(req.headers['x-forwarded-proto'] === 'https'){
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }

})

app.use('/', express.static(__dirname + '/public'));

app.listen(PORT, () => console.log(`Up and listening on ${PORT}`));
