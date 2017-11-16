const React = require('react');
const ReactRouter = require('react-router-dom');
const NavLink = ReactRouter.NavLink;

const errorCode = '404';
const errorCodeMessage = 'Page not found';
const mainMessage = 'The page you are looking for does not exist';
const redirectMessage = 'Home';
const icon = 'frown-o';

require('./not-found.css');

class NotFound extends React.Component {
    constructor(props) {
        super(props);
    }

    createPage() {
        const iconClass = `fa fa-${icon} not-found-icon`;
        const page = (
            <div className='not-found-container'>
                <i className={iconClass} aria-hidden="true"/>
                <p className='not-found-error-code'>{errorCode}</p>
                <p className='not-found-error-code-message'>{errorCodeMessage}</p>
                <p className='not-found-main-message'>{mainMessage}</p>
                <NavLink exact activeClassName='active-item' className='not-found-redirect-message' to='/'>
                    {redirectMessage}
                </NavLink>
            </div>
        );

        return page;
    }

    render() {
        return this.createPage();
    }
}

module.exports = NotFound;