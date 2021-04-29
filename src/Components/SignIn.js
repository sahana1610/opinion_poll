import React, { useContext, useState } from 'react';
import { Form, Button, Nav } from 'react-bootstrap'
import { withRouter, useHistory } from 'react-router-dom'
import AuthContext from "../utils/AuthContext"

function SignIn(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let history = useHistory()
    const { user, updateUser } = useContext(AuthContext)

    const handleClick = (e) => {
        e.preventDefault()
        console.log(`Email : ${email}`);
        console.log(`Password : ${password}`);

        if (email !== '' && password !== '') {
            updateUser({ ...user, loginState: true })

            if (history) {
                history.push('/poll');
            } else {
                console.log('History is null');
            }
        } else {
            alert('Alert!!,Please fill all the fields.')
        }
    }

    return (

        <div className="signIn">
            <Form onSubmit={handleClick}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="form-inline">Email address</Form.Label>
                    <Form.Control value={email} type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="form-inline">Password</Form.Label>
                    <Form.Control value={password} type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox" >
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Form.Group>
                    <Button variant="primary" type="submit" className="mb-4">
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

export default withRouter(SignIn);