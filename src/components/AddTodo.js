import  Button  from 'react-bootstrap/Button';
import { useState } from 'react';
import { Form } from 'react-bootstrap';

const AddTodo = (props) => {

    const [input, setInput] = useState('');

    const submit = (e) => {
        e.preventDefault();
        if (input === '') {
            alert('Please enter your todo')
        } else  {
            props.addTodoList(input)
            setInput('');
        }
    }

     

    return (
        <Form onSubmit={submit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Add Todo</Form.Label>
    <Form.Control type="text" placeholder="Enter your Todo" 
    value={input}
    onChange = {e=>setInput(e.target.value)}
    />
    
  </Form.Group>
  <Button variant="primary" type="submit">
    Add
  </Button>
</Form>
    )
}

export default AddTodo;