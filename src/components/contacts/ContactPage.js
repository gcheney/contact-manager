import React, { PropTypes } from 'react';

class ContactPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            contact: { firstName : null }
        }

        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onFirstNameChange(event) {
        const contact = this.state.contact;
        contact.firstName = event.target.value;
        this.setState({ contact: contact });
    }

    onClickSave() {
        alert(`Saving ${this.state.contact.firstName}`);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <div className="well">
                        <h1 className="text-center">Your Contacts</h1>
                        <h2>Add Contact</h2>
                        <div className="form-group">
                            <label for="firstName">First Name: </label>
                            <input type="text" className="form-control" onChange={this.onFirstNameChange} value={this.state.contact.firstName} />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-success" value="Save" onClick={this.onClickSave} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactPage;
