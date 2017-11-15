const React = require('react');

const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;

const Navigation = require('../navigation/navigation.jsx');
const Home = require('../home/home.jsx');
const Users = require('../users/users.jsx');
const Events = require('../events/events.jsx');

require('./main.css');

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div className='container'>
                    <Navigation/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/users' component={Users}/>
                        <Route path='/events' component={Events}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

module.exports = Main;