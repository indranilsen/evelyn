const React = require('react');
const ReactDOM = require('react-dom');

const Home = require('./components/home/home.jsx');

require('./index.css');

class App extends React.Component {
    render() {
        return (
            <Home/>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);