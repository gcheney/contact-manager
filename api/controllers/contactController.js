import _ from 'lodash';
import Contact from '../models/contact.js';


/* Create */
module.exports.create = (req, res) => {
    var newcontact = new Contact(req.body);
    Contact.save(newContact, (err, contact) => {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, contact);
        }
    });
};

/* Read */
module.exports.readAll = (req, res) => {
    Contact.find({}, function(err, contacts) {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 200, contacts);
        }
    });
};

module.exports.readOne = (req, res) => {
    Contact.findById(req.params.id, (err, contact) => {
        if (err) {
            sendJsonResponse(res, 400, err);
        };
        if (contact) {
            sendJsonResponse(res, 200, contact);
        } else {
            sendJsonResponse(res, 404, 'Contact not found');
        }
    });
},

/* Update */
module.exports.update = (req, res) => {
    Contact.findById(req.params.id, (err, contact) => {
        if (err) {
            sendJsonResponse(res, 400, err);
        }
        if (contact) {
            _.merge(contact, req.body);
            contact.save((err, contact) => {
                if (err) {
                    sendJsonResponse(res, 400, err);
                } else {
                    sendJsonResponse(res, 200, contact);
                }
            });
        } else {
            sendJsonResponse(res, 404, 'Contact not found');
        }
    });
},

/* Delete */
module.exports.delete = (req, res) => {
    Contact.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 204, null);
        }
    });
}

var sendJsonResponse = (res, status, content) => {
    res.status(status);
    res.json(content);
};