const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;

const NavigationBar = require('./navigation-bar/navigation-bar.jsx');

const NavigationItems = [
    {
        "text": "Main",
        "url": "/",
        "icon": "home"
    },
    {
        "text": "Users",
        "url": "#/users"
    },
    {
        "text": "Events",
        "url": "#/events"
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