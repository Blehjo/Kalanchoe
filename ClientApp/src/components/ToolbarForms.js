import { useState } from "react";
import { Form } from "react-bootstrap"

const ToolbarForms = ({ add, secondary, third, type }) => {
    const [controllers, setControllers] = useState([]);
    const [formFields, setFormFields] = useState(null);

    switch (type) {
        case 0:
            return setFormFields({ title: '' });
        case 1:
            return setFormFields({ request: '' });
        case 2:
            return setFormFields({ searchValue: '' });
        case 3:
            return setFormFields({ noteValue: '' });
        case 4:
            return setFormFields({ title: '', link: '', mediaLink: '' });
        default:
            return state;
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            add(formFields);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Form>
            {controllers?.map(({ title }) => (
            <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>{title}</Form.Label>
                <Form.Control
                    as='input'
                    placeholder={`Create a ${placeholder}`}
                    label={title}
                    type={title}
                    required
                    onChange={handleChange}
                    name={title.toLowerCase()}
                    value={title}
                />
            </Form.Group>
            ))}
        </Form>
    )
}

export default ToolbarForms;