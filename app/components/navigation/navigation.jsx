const React = require('react');
const ReactRouter = require('react-router-dom');

const NavigationBar = require('./navigation-bar/navigation-bar.jsx');

const NavigationItems = [
    {
        "text": "Home",
        "url": "/",
        "icon": "home"
    },
    {
        "text": "Users",
        "url": "/users"
    },
    {
        "text": "Events",
        "url": "/events"
    }
];

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavigationBar items={NavigationItems}/>
        );
    }
}

module.exports = Navigation;