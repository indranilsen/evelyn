const React = require('react');
const ReactRouter = require('react-router-dom');
const NavLink = ReactRouter.NavLink;

require('./navigation-item.css');

class NavigationItem extends React.Component {
    constructor(props) {
        super(props);
    }

    createLink() {
        if (this.props.icon) {
            const iconClass = `fa fa-${this.props.icon} fa-lg`;
            return (
                <a href={this.props.url}><i className={iconClass} aria-hidden="true"/></a>
            );
        }

        return (
            <a href={this.props.url}>{this.props.text}</a>
        );
    }

    render() {
        const naviationItem = this.createLink();
        return (
            <li className="nav-bar-item">{naviationItem}</li>
        );
    }
}

module.exports = NavigationItem;