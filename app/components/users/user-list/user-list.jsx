const React = require('react');
const Util = require('./util.js');

require('./user-list.css');

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: this.props.value || ''
        };
        this.updateSearch = this.updateSearch.bind(this);
        this.filter = this.filter.bind(this);
    }

    componentWillReceiveProps (nextProps) {
        if (typeof nextProps.value !== 'undefined' && nextProps.value !== this.props.value) {
            const data = {
                target: {
                    value: nextProps.value
                }
            };
            this.updateSearch(data)
        }
    }

    updateSearch (data) {
        const searchTerm = data.target.value;
        this.setState(
            { searchTerm: searchTerm },
            () => {
                if (this._throttleTimeout) {
                    clearTimeout(this._throttleTimeout)
                }

                this._throttleTimeout = setTimeout(
                    () => this.props.onChange(searchTerm),
                    this.props.throttle
                )
            }
        );
    }

    filter (keys) {
        return Util.createFilter(this.state.searchString, keys, {
            caseSensitive: this.props.caseSensitive
        });
    }

    render () {
        const inputProps = {};
        inputProps.type = 'search';
        inputProps.value = this.state.searchString;
        inputProps.onChange = this.updateSearch;
        inputProps.className = this.props.inputClassName;
        inputProps.placeholder = 'Search';
        return (
            <div className={this.props.className}>
                <input {...inputProps} />
            </div>
        )
    }
}

UserList.defaultProps = {
    className: '',
    onChange () {},
    caseSensitive: false,
    throttle: 200
};

module.exports = UserList;