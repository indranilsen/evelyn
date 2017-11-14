const React = require('react');

const Navigation = require('../navigation/navigation.jsx');

require('./main.css');

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navigation/>
        );
    }
}

module.exports = Main;