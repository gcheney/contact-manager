import mongoose from 'mongoose';
import seed from './seed';

var dbURI = '';

if (process.env.NODE_ENV === 'test') {
    dbURI = 'mongodb://localhost/contact-manager-test';
    console.log('Using test database');
} else if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGOLAB_URI;
    console.log('Using production database');
} else {
    dbURI = 'mongodb://localhost/contact-manager';
    console.log('Using development database');
}
mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to ' + dbURI);
    seed();
});

mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

var gracefulShutdown = (msg, callback) => {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};

// For nodemon restarts
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// For app termination
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});

// For Heroku app termination
process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', function () {
        process.exit(0);
    });
});


//Bring in required schema
import './contact';
