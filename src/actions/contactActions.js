import * as types from './actionTypes';

export function createContact(contact) {
    return { 
        type: types.CREATE_CONTACT, 
        contact: contact 
    };
}