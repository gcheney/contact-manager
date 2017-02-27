import _ from 'lodash';
import Contact from '../models/contact.js';


/* Create */
const ContactController = {

    create: (req, res) => {
        var newcontact = new Contact(req.body);
        Contact.save(newContact, (err, contact) => {
            if (err) {
                sendJsonResponse(res, 400, {'error': err});
            } else {
                sendJsonResponse(res, 201, contact);
            }
        });
    },

    /* Read */
    readAll: (req, res) => {
        Contact.find({}, function(err, contacts) {
            if (err) {
                sendJsonResponse(res, 400, {'error': err});
            } else {
                sendJsonResponse(res, 200, contacts);
            }
        });
    },

    readOne: (req, res) => {
        Contact.findById(req.params.id, (err, contact) => {
            if (err) {
                sendJsonResponse(res, 400, {'error': err});
            };
            if (contact) {
                sendJsonResponse(res, 200, contact);
            } else {
                sendJsonResponse(res, 404, {'message': 'Contact not found'});
            }
        });
    },

    /* Update */
    update: (req, res) => {
        Contact.findById(req.params.id, (err, contact) => {
            if (err) {
                sendJsonResponse(res, 400, {'error': err});
            }
            if (contact) {
                _.merge(contact, req.body);
                contact.save((err, contact) => {
                    if (err) {
                        sendJsonResponse(res, 400, {'error': err});
                    } else {
                        sendJsonResponse(res, 200, contact);
                    }
                });
            } else {
                sendJsonResponse(res, 404, {'message': 'Contact not found'});
            }
        });
    },

    /* Delete */
    delete: (req, res) => {
        Contact.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                sendJsonResponse(res, 400, {'error': err});
            } else {
                sendJsonResponse(res, 204, {'message': 'Contact deleted'});
            }
        });
    }

};

var sendJsonResponse = (res, status, content) => {
    res.status(status);
    res.json(content);
};

export default ContactController;