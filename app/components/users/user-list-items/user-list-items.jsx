const React = require('react');

const UserListItem = require('../user-list-item/user-list-item.jsx');

require('./user-list-items.css');

class UserListItems extends React.Component {
    constructor(props) {
        super(props);
    }

    createUserListItems() {
        return this.props.data.map((users, index) => {
            return (
                <UserListItem id={users.id} name={users.name} description={users.description} key={index}/>
            )
        });
    }

    render() {
        return (
            <ul className="user-list">{this.createUserListItems()}</ul>
        );
    }
}

module.exports = UserListItems;