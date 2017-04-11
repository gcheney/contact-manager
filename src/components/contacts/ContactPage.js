import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as contactActions from '../../actions/contactActions';

class ContactPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            contact: { firstName : '' }
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
        //alert(`Saving ${this.state.contact.firstName}`);
        this.props.dispatch(contactActions.createContact(this.state.contact));
    }

    contactRow(contact, index) {
        return <div key={index}>{contact.firstName}</div>;
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <div className="well">
                        <h1 className="text-center">Your Contacts</h1>
                        {this.props.contacts.map(this.contactRow)}
                        <h2>Add Contact</h2>
                        <div className="form-group">
                            <label for="firstName">First Name: </label>
                            <input type="text" placeholder="First Name" 
                                className="form-control" onChange={this.onFirstNameChange} 
                                value={this.state.contact.firstName} />
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

ContactPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        contacts: state.contacts
    };
}

export default connect(mapStateToProps)(ContactPage);
