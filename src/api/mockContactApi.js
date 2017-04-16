import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const contacts = [
  {
    id: 1,
    firstName: "John",
    lastName: "James",
    phoneNumber: "555-555-5555",
    address: "141 Main St, USA"
  },
  {
    id: 2,
    firstName: "John",
    lastName: "James",
    phoneNumber: "555-555-5555",
    address: "141 Main St, USA"
  },
  {
    id: 3,
    firstName: "John",
    lastName: "James",
    phoneNumber: "555-555-5555",
    address: "141 Main St, USA"
  },
  {
    id: 4,
    firstName: "John",
    lastName: "James",
    phoneNumber: "555-555-5555",
    address: "141 Main St, USA"
  },
  {
    id: 5,
    firstName: "John",
    lastName: "James",
    phoneNumber: "555-555-5555",
    address: "141 Main St, USA"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = () => {
  return Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
};

class ContactApi {
  static getAllContacts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], contacts));
      }, delay);
    });
  }

  static saveContact(contact) {
    contact = Object.assign({}, contact); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minContactFirstNameLength = 1;
        if (contact.firstName.length < minContactFirstNameLength) {
          reject(`First Name must be at least ${minContactFirstNameLength} characters.`);
        }

        if (contact.id) {
          const existingContactIndex = contacts.findIndex(c => c.id == contact.id);
          contacts.splice(existingContactIndex, 1, contact);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new contacts in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          contact.id = generateId();
          contacts.push(contact);
        }

        resolve(contact);
      }, delay);
    });
  }

  static deleteContact(contactId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfContactToDelete = contacts.findIndex(contact => {
          contact.id == contactId;
        });
        contacts.splice(indexOfContactToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ContactApi;
