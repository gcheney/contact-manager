//Handles app template for every page
import React, {PropTypes} from 'react';
import Header from './common/header';


class App extends React.Component {
    render() {
        return (
            <div classname="container-fluid">
                <Header />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;