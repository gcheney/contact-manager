import React, { PropTypes } from 'react';

class ContactPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            contact: { firstName : null }
        }
    }

    onFirstNameChange(event) {
        const contact = this.state.contact;
        contact.firstName = event.target.value;
        this.setState({ contact: contact });
    }

    render() {
        return (
            <div className="well">
                <h1 className="text-center">Your Contacts</h1>
                <h2>Add Contact</h2>
                <div className="form-group">
                    <input type="text" onChange={this.onFirstNameChange} value={this.state.contact.firstName} />
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-success" value="Save" onClick={this.onClickSave} />
                </div>
            </div>
        );
    }
}

export default ContactPage;
