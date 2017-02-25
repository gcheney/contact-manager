import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from './webpack.config.dev';
import open from 'open';
import logger from 'morgan';
import compress from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';

const port = process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);

// use logging in development and compression in production
if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
} else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
}

//app setup
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: true 
}));
app.use(cookieParser());

// serve static file
app.use(express.static(path.join(__dirname, 'src')));
app.use(favicon(path.join(__dirname, 'favicon.ico')));


app.get('/', function(req, res) {
  res.sendFile(path.join( __dirname, './src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
    console.log('Server running at http://127.0.0.1:' + port);
  }
});