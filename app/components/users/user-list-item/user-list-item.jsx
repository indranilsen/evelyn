const React = require('react');

require('./user-list-item.css');

class UserListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    createUserListItem() {
        return (
            <ul className="user-list-item">
                <li>{this.props.name}</li>
                <li>{this.props.description}</li>
            </ul>
        );
    }

    render() {
        return (
            <li className="user-list-item-cont">
                {this.createUserListItem()}
            </li>
        );
    }
}

module.exports = UserListItem;