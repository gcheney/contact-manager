import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="jumbotron">
                    <h1>Contact Manager</h1>
                    <p>Manage your contacts from obe convenient location</p>
                    <Link to="/about" className="btn btn-default btn-lg">Learn More</Link>
                    <Link to="/contacts" className="btn btn-primary btn-lg">Get Started</Link>
                </div>
            </div>
        );
    }
}

export default HomePage;