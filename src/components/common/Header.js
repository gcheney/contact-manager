import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
      <nav className="navbar navbar-inverse navbar-static-top" role="navigation">
        <div className="navbar-header">
            <Link to="/" className="navbar-brand">Contact Manager</Link>
        </div>
        <ul className="nav navbar-nav">
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><Link to="/contacts" activeClassName="active">Manage Contacts</Link></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
            <li><Link to="/about" activeClassName="active">About</Link></li>
        </ul>
    </nav>
  );
};

export default Header;