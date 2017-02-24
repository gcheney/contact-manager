const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const compress = require('compression');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');


// set app port
const PORT = process.env.PORT || 3000;

// use logging in development and compression in production
if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
} else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
}

//app setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: true 
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src')));
app.use(favicon(path.join(__dirname, 'favicon.ico')));


app.listen(PORT, function () {
    console.log('Server running at http://127.0.0.1:' + PORT);
});