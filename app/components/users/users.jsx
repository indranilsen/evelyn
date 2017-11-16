const React = require('react');

const UserForm = require('./user-form/user-form.jsx');

require('./user.css');

class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className='user-container'>
                <li><UserForm></UserForm></li>
                <li><UserForm></UserForm></li>
            </ul>
        );
    }
}

module.exports = Users;