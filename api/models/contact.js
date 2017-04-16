import mongoose from 'mongoose';

var contactSchema = mongoose.Schema({

    firstName: {
        type: String,
        maxlength: 100, 
        minLength: 1,
        required: true    
    },
    lastName: {
        type: String,
        maxlength: 100, 
    },
    phoneNumber: {
        type: String,
        maxlength: 15
    },
    address: {
        type: String
    }

});

module.exports = mongoose.model('Contact', contactSchema);