const React = require('react');
const ReactRouter = require('react-router-dom');
const NavLink = ReactRouter.NavLink;

require('./navigation-item.css');

class NavigationItem extends React.Component {
    constructor(props) {
        super(props);
    }

    createLink() {
        const path = `${this.props.url}`;
        let linkContent = this.props.text;

        if (this.props.icon) {
            const iconClass = `fa fa-${this.props.icon} fa-lg`;
            linkContent = <i className={iconClass} aria-hidden="true"/>;
        }

        let link = (
            <NavLink activeClassName='active-item' to={path}>
                {linkContent}
            </NavLink>
        );

        if (this.props.url === '/') {
            link = (
                <NavLink exact activeClassName='active-item' to={path}>
                    {linkContent}
                </NavLink>
            )
        }

        return link;
    }

    render() {
        const naviationItem = this.createLink();
        return (
            <li className="nav-bar-item">{naviationItem}</li>
        );
    }
}

module.exports = NavigationItem;