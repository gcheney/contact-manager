//Handles app template for every page

import React, {PropTypes} from 'react';

class App extends React.Component {
    render() {
        return (
            <div classname="container-fluid">
                <p>Test Header</p>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;