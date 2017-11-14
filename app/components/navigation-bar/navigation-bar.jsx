const React = require('react');

const NavigationItem = require('../navigation-item/navigation-item.jsx');

require('./navigation-bar.css');

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }

    createNavigationItem(item, i) {
        return <NavigationItem url={item.url} text={item.text} icon={item.icon} key={i}/>
    }

    createNavigationBar() {
        return this.props.items.map((element, index) => {
            return this.createNavigationItem(element, index)
        });
    }

    render() {
        const navigationBar = this.createNavigationBar();
        return (
            <ul className="nav-bar">
                {navigationBar}
            </ul>
        );
    }
}

module.exports = NavigationBar;