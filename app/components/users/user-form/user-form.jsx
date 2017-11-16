const React = require('react');

const Form = require('react-jsonschema-form').default;

require('./user-form.css');

const userFormSchema = {
    type: "object",
    required: ["name", "description"],
    properties: {
        name: {type: "string", title: "Name", default: ""},
        description: {type: "string", title: "Description", default: ""}
    }
};

const uiSchema = {
    description: {
        "ui:widget": "textarea",
        "ui:options": {
            rows: 2
        }
    }
};

const onSubmit = (form) => console.log(form.formData);
const onChange = (form) => console.log(form.formData);
const onError = (errors) => console.log(errors.length);

class Forms extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='user-form'>
                <Form schema={userFormSchema}
                      uiSchema={uiSchema}
                      onChange={onChange}
                      onSubmit={onSubmit}
                      onError={onError} />
            </div>
        );
    }
}

module.exports = Forms;