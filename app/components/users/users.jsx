const React = require('react');

const UserForm = require('./user-form/user-form.jsx');
const UserList = require('./user-list/user-list.jsx');
const createFilter = require('./user-list/util.js').createFilter;

require('./user.css');

const keys = ['name', 'description'];

const users = [
    {
        id: 'c6c08bb9-af50-49b1-ad07-90158e4dbeb9',
        name: "Service A",
        description: "This is service A"
    },
    {
        id: '5f9a1e64-48a0-4f77-b054-09f4bbb4461c',
        name: "Service B",
        description: "Another service"
    },
    {
        id: '1d344d7c-6335-4713-8a31-b9945585ed1a',
        name: "Service C",
        description: "A great service"
    },
    {
        id: '52f64055-56c9-4d07-9785-76acfc578a9e',
        name: "Service D",
        description: "Making services great again"
    },
    {
        id: '4725d9c8-f420-4673-bc20-16a455924fd6',
        name: "Service E",
        description: "Green service"
    }
];

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: ''
        };
        this.searchUpdated = this.searchUpdated.bind(this);
    }

    render() {
        const filteredEmails = users.filter(
            createFilter(this.state.searchString, keys, {caseSensitive: false})
        );
        return (
            <ul className='user-container'>
                <li><UserForm/></li>
                <li>
                    <UserList className='search-input' onChange={this.searchUpdated} />
                    {filteredEmails.map((users, index) => {
                        return (
                            <div style={{paddingBottom: 1 + 'em'}} key={index}>
                                <div style={{color: 'red'}}>  Id: {users.id}</div>
                                <div>Name: {users.name}</div>
                                <div>Desc: {users.description}</div>
                            </div>
                        )
                    })}
                </li>
            </ul>
        );
    }

    searchUpdated (term) {
        this.setState({ searchString: term })
    }
}

module.exports = Users;