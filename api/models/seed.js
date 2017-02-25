import mongoose from 'mongoose';
import Contact from './contact';

var contacts = [
    { 
        firstName: 'Johnny',
        lastName: 'B. Goode',
        phoneNumber: '459-2222',
        address: '123 Main Street, Anytown, TX'
    },
    { 
        firstName: 'Jenny',
        lastName: 'Jenny',
        phoneNumber: '867-5309'        
    }
];

module.exports = () => {
    //remove all contacts from the DB
    Contact.remove({}, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Removed current contacts.');        
            //Add new contcts to the DB
            contacts.forEach((contactToAdd) => {
                Contact.create(contactToAdd, (err, newContact) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Added a new contact to the DB:');
                        console.log(newContact);                       
                    }
                });
            });
        }
    });
}