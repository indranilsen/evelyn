const React = require('react');
const ReactDOM = require('react-dom');

const Main = require('./components/main/main.jsx');

require('./index.css');

class App extends React.Component {
    render() {
        return (
            <Main/>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);