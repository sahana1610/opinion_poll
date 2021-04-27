import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'

class SignIn extends Component {
    render() {
        return (
            <div className="signIn">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label class="form-inline">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label class="form-inline">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox" >
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Form.Group>
                        <Button variant="primary" type="submit" class="mb-4">
                            Sign In
                        </Button>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>New user here? <a href="https://www.google.com/">SignUp</a></Form.Label>
                        <Nav.Link href="https://www.google.com/">Forgot password</Nav.Link>
                    </Form.Group>
                </Form>
            </div >
        );
    }
}

export default SignIn;